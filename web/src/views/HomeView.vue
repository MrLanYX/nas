<template>
	<div style="width: 100vw; height: 100vh; padding: 200px">
		<div
			style="width: 800px; height: 500px; padding: 10px; background: #eee"
		>
			<div style="width: 100%; height: 100%; overflow: hidden">
				<!-- 主视图就在其中 -->
				<div
					style="
						width: 100%;
						height: 100%;
						background: #fff;
						overflow-y: scroll;
						overflow-x: hidden;
					"
					@scroll="scroll"
				>
					<div :style="'height: ' + height1 + 'px;'">
						这是前置占位空盒
					</div>
					<div
						v-for="i in currentNum"
						:key="i.id"
						style="height: 50px"
					>
						每条高度50px，这是第列表的{{ i.id }}下标位置,{{
							i.value
						}}
						<div
							:style="
								'width: ' +
								(i.id % 100) +
								'%;height:10px;background: lightslategray'
							"
						></div>
					</div>
					<div :style="'height: ' + height2 + 'px;'">
						这是后置占位空盒
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const largeArray = [];
for (let i = 0; i < 1000000; i++) {
	largeArray.push({
		id: i,
		value: `Item ${i + 1}`,
	});
}
// console.log(largeArray);

let current = 1;
const arr = largeArray.slice(current - 1, 15);
const currentNum = ref(arr);

const height1 = ref((current - 1) * 50);
const height2 = ref((largeArray.length - 15) * 50);
function scroll(e) {
	let div = e.target;
	let num = Math.ceil(div.scrollTop / 50);
	if (num == 0) num = 1;
	if (current !== num) {
		current = num;
		let top = num - 1 - 4 < 0 ? 0 : num - 1 - 4;
		let bottom =
			num - 1 + 16 > largeArray.length ? largeArray.length : num - 1 + 16;
		console.log(
			"当前第",
			current,
			`应当显示下标${top}到${bottom}`,
			"上占位高度",
			top * 50,
			"下占位高度",
			(largeArray.length - bottom) * 50
		);
		height1.value = top * 50;
		height2.value = (largeArray.length - bottom) * 50;
		currentNum.value = largeArray.slice(top, bottom);
	}
}
</script>

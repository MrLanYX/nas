// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    user: ExportUser;
  }
}

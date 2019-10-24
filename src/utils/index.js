/**
 * Created by zh on 2019/10/22.
 */
import { EventEmitter } from './EventEmitter';
const EventEmitter3 = require('eventemitter3');

const event = new EventEmitter();
const event3 = new EventEmitter3();

export {
  event,
  event3,
};

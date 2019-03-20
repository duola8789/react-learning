/**
 * Created by zh on 2019/3/6.
 */
import * as API from '../api';
import { get } from '../helpers';

const getAnswer = async (params) => get(API.demo2.getAnswer, params);

export const demo2 = {
  getAnswer
};

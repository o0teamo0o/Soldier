/**
 * 此文件管理项目所有接口
 */
import {
  get,
  getMap,
  post,
  postMap,
  postOther,
  put,
  del
} from './network';

/**
 * 获取用户信息
 */
export const soldirerinfo = (parameter, isShowLoading) => getMap('soldirerinfo/qrySoldirerinfo', parameter, isShowLoading);

/**
 * 评论接口
 */
export const saveFhuaDis = (data, isShowLoading) => post('api/fhuaDis/saveFhuaDis', data, isShowLoading);
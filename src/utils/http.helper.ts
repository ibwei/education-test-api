import { Response } from 'express';

/**
 * @description 返回格式的统一处理
 * @type {T} 返回数据的 type 类型
 */

export function genHttpData(resultCode, resultMessage, data) {
  return {
    resultCode,
    resultMessage,
    data,
  };
}

/**
 * @description 返回格式的统一处理
 * @type {T} 返回数据的 type 类型
 */
export function httpResponse<T>(
  res: Response,
  data: T = null,
  taskCode = 0,
  message = '请求成功',
  statusCode = 200,
) {
  return res.status(statusCode).json(genHttpData(taskCode, message, data));
}

import axios from 'axios';
import { Request, ResponseDetail } from '../../../../../@types';
import { getErrorCode } from '../../../../../@utils';
import { Post } from '../../../models';

export const deletePost = (
  id: Post['id'],
  options?: Request.Options,
): Promise<ResponseDetail.Failure | ResponseDetail.Success<boolean>> => {
  return axios
    .request<boolean>({
      method: 'DELETE',
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      cancelToken: options?.cancelToken,
    })
    .then<ResponseDetail.Success<boolean>>(response => {
      return {
        status: 'success',
        data: response.data,
      };
    })
    .catch<ResponseDetail.Failure>(error => {
      return {
        status: 'failure',
        code: getErrorCode(error),
      };
    });
};

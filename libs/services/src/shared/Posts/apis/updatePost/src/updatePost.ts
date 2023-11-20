import axios from 'axios';
import { Request, ResponseDetail } from '../../../../../@types';
import { getErrorCode } from '../../../../../@utils';
import { Post } from '../../../models';

/** */
export const updatePost = (
  id: Post['id'],
  data: Omit<Post, 'id'>,
  options?: Request.Options,
): Promise<ResponseDetail.Failure | ResponseDetail.Success<Post>> => {
  interface ResponseSuccess {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  return axios
    .request<ResponseSuccess>({
      method: 'PUT',
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      cancelToken: options?.cancelToken,
      data,
    })
    .then<ResponseDetail.Success<Post>>(response => {
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

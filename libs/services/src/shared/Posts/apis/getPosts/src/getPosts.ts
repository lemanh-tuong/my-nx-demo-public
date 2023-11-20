import axios from 'axios';
import { Request, ResponseListing } from '../../../../../@types';
import { getErrorCode } from '../../../../../@utils';
import { Post } from '../../../models';

/** */
export const getPosts = (
  options?: Request.Options,
): Promise<ResponseListing.Failure | ResponseListing.Success<Post>> => {
  type ResponseSuccess = Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;
  return axios
    .request<ResponseSuccess>({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
      cancelToken: options?.cancelToken,
    })
    .then<ResponseListing.Success<Post>>(response => {
      return {
        status: 'success',
        data: {
          hits: response.data,
          pagination: {
            totalPages: 1,
            totalRows: response.data.length,
          },
        },
      };
    })
    .catch<ResponseListing.Failure>(error => {
      return {
        status: 'failure',
        code: getErrorCode(error),
      };
    });
};

import { CancelToken } from 'axios';

export namespace Request {
  export interface Options {
    cancelToken?: CancelToken;
  }
}

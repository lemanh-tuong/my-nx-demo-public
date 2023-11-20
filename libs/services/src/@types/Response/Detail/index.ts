import { ResponseCode } from '../Code';

/** */
export namespace ResponseDetail {
  /** */
  export interface Success<T> {
    status: 'success';
    data: T;
  }

  /** */
  export interface Failure {
    status: 'failure';
    code: ResponseCode;
  }
}

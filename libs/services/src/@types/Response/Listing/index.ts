import { ResponseCode } from '../Code';

/** */
export namespace ResponseListing {
  /** */
  export interface Success<T> {
    status: 'success';
    data: {
      hits: T[];
      pagination: {
        totalRows: number;
        totalPages: number;
      };
    };
  }

  /** */
  export interface Failure {
    status: 'failure';
    code: ResponseCode;
  }
}

import {AxiosRequestConfig, AxiosResponse} from 'axios';

declare global {
  /**
   * Return types contract for API Request.
   */
  export interface ApiResponse<T> extends Promise<AxiosResponse<T>> {}

  /**
   * Object key value pair contract.
   *
   */
  export interface Object {
    [key: string]: any;
  }

  /**
   * Interface contract for every each API Request function.
   */
  export interface ApiProps {
    params?:any;
    config?: AxiosRequestConfig;
  }
}

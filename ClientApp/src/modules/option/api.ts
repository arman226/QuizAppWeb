import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Option} from './types';

export const getOptionsBySubjectCode = async (
  subjectCode:string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Option[]>> => {
  const queryString = `api/Question/GetOptionBySubject?subjectCode=${subjectCode}`;
  return Axios.get(queryString, config);
};

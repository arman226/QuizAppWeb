import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Question} from './types';

export const getQuestionsByCategory = async (
  categoryId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Question[]>> => {
  const queryString = `api/Question/GetQuestionsById?categoryId=${categoryId}`;
  return Axios.get(queryString, config);
};



export const getQuestionCode = async (
  categoryId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<string>> => {
  const queryString = `api/Question/GetQuestionCode?categoryId=${categoryId}`;
  return Axios.get(queryString, config);
};
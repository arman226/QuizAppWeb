import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Category} from './types';

export const getCategoriesBySubject = async (
  subjectId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Category[]>> => {
  const queryString = `api/Category/GetAllCategoriesBySubject?subjectId=${subjectId}`;
  return Axios.get(queryString, config);
};


export const createCategory = async (
  subjectId:number,
  category:string,
  description: string,
  userId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Category[]>> => {
  const queryString = `api/Category/CreateCategory?subjectId=${subjectId}&category=${category}&description=${description}&userId=${userId}`;
  return Axios.post(queryString, config);
};

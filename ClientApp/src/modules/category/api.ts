import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Category} from './types';

export const getCategoriesBySubject = async (
  subjectId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Category[]>> => {
  const queryString = `api/Category/GetAllCategoriesBySubject?subjectId=${subjectId}`;
  return Axios.get(queryString, config);
};

export const getCategoryById = async (
  categoryId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Category>> => {
  const queryString = `api/Category/GetCategoryById?categoryId=${categoryId}`;
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


export const updateCategory = async (
  categoryId:number,
  category:string,
  description: string,
  userId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Category[]>> => {
  const queryString = `api/Category/UpdateCategory?categoryId=${categoryId}&category=${category}&description=${description}&userId=${userId}`;
  return Axios.post(queryString, config);
};


export const deactivateCategory = async (categoryId:number,
  userId:number,
  config?: AxiosRequestConfig,
)=> {
  const queryString = `api/Category/DeactivateCategory?categoryId=${categoryId}&userId=${userId}`;
  return Axios.post(queryString, config);
};

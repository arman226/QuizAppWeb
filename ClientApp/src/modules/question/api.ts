import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Question, ApiParams} from './types';

export const getQuestionsByCategory = async (
  categoryId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Question[]>> => {
  const queryString = `api/Question/GetQuestionsById?categoryId=${categoryId}`;
  return Axios.get(queryString, config);
};

export const getQuestionInfoById = async (
  questionId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Question>> => {
  const queryString = `api/Question/GetQuestionInfoById?questionId=${questionId}`;
  return Axios.get(queryString, config);
};

export const getQuestionCode = async (
  categoryId:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<string>> => {
  const queryString = `api/Question/GetQuestionCode?categoryId=${categoryId}`;
  return Axios.get(queryString, config);
};

export const createQuestion = async (
  params: any,
  config?: AxiosRequestConfig,
)=> {
  const queryString = `api/Question/CreateQuestion`;
  return Axios.post(queryString, params, {
    headers:{
      'Content-Type':'text/json',
    },
  });
};
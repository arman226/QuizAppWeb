import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Category} from './types';

export const getCategories = async (
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Category[]>> => {
  const queryString = `api/Subject/GetAllSubjects`;
  return Axios.get(queryString, config);
};

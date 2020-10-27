import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Subject} from './types';

export const getSubjects = async (
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Subject[]>> => {
  const queryString = `api/Subject/GetAllSubjects`;
  return Axios.get(queryString, config);
};


export const deactivateSubject = async (subjectId:number,
  userId:number,
  config?: AxiosRequestConfig,
)=> {
  const queryString = `api/Subject/DeactivateSubject?subjectId=${subjectId}&userId=${userId}`;
  return Axios.post(queryString, config);
};
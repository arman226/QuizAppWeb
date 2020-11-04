import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Subject} from './types';

export const getSubjects = async (
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Subject[]>> => {
  const queryString = `api/Subject/GetAllSubjects`;
  return Axios.get(queryString, config);
};


export const getSubjectById = async (
  id:number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Subject>> => {
  const queryString = `api/Subject/GetSubjectById?id=${id}`;
  return Axios.get(queryString, config);
};


export const deactivateSubject = async (subjectId:number,
  userId:number,
  config?: AxiosRequestConfig,
)=> {
  const queryString = `api/Subject/DeactivateSubject?subjectId=${subjectId}&userId=${userId}`;
  return Axios.post(queryString, config);
};

export const createSubject = async (
  subject:string,
  description:string,
  userId:number,
  config?: AxiosRequestConfig,
)=> {
  const queryString = `api/Subject/CreateSubject?subject=${subject}&description=${description}&userId=${userId}`;
  return Axios.post(queryString, config);
};

export const updateSubject = async (
  subjectId:number,
  subject:string,
  description:string,
  userId:number,
  config?: AxiosRequestConfig,
)=> {
  const queryString = `api/Subject/UpdateSubject?subjectId=${subjectId}&subject=${subject}&description=${description}&userId=${userId}`;
  return Axios.post(queryString, config);
};


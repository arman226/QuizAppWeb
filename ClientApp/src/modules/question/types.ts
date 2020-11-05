import { Option } from '../option/types';

export interface Question {
    questionId: number;
    questionCode:string
    title: string;
    question: string;
  }
  
export interface ApiParams {
  questionCode:string;
  title:string;
  question:string;
  userId:number;
  categoryId:number;
  options: Option[];
}
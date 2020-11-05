var _= require('lodash')

export const arrayEquals=(a:Array<any>, b:Array<any>)=> {
   return _.isEqual(a,b);
  }
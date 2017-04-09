import {ApiError} from "./api-error";
export interface ApiResult {

    trace:string[];
    errors:ApiError[];
    result?:any;

}
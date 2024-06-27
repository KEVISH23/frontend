import {  IRESPONSECONTENT } from "./IContent";
import { IRESPONSEUSER, IUSERS } from "./IUSERS";

export interface IRESPONSE{
    status:boolean,
    user:any,
    data:any,
    message:string
}
// export interface IRESPONSE{
//     status:boolean,
//     user:IRESPONSECONTENT|IRESPONSEUSER|IRESPONSECONTENT[]|IRESPONSEUSER[]|IUSERS|IUSERS[],
//     data:IRESPONSECONTENT|IRESPONSEUSER|IRESPONSECONTENT[]|IRESPONSEUSER[]|IUSERS|IUSERS[],
//     message:string
// }
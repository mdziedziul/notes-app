import { Action } from "./action";


export interface PageHeaderSetts {
    title? : string,
    name?: string,
    type? : string,
    backTitle? : string,
    backToRouter? : any,
    actions? : Action[]
}
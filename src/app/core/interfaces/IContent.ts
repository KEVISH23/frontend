export interface IContent{
    _id?: string,
    userId?:string,
    title?:string,
    contentPath?:string
    description?:string,
    createdAt?: string,
    updatedAt?: string,
    updatedBy?: string
}
export interface IRESPONSECONTENT{
    _id: string,
    userId:string,
    title:string,
    contentPath:string
    description:string,
    createdAt: string,
    updatedAt: string,
    updatedBy: string
}
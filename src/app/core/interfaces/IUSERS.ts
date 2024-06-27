
export interface IUSERS {
    _id?: string,
    fullName?: string,
    gender?: string,
    email?: string,
    password?: string,
    role?: string,
    token?: string,
    createdAt?: string,
    updatedAt?: string,
    updatedBy?: string
}
export interface IRESPONSEUSER {
    _id: string,
    fullName: string,
    gender: string,
    email: string,
    password: string,
    role: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    updatedBy: string
}


export interface ILOGIN {
    email: string,
    password: string,
}
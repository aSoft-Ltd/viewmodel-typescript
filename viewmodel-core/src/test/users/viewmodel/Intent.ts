import { UserInfo } from "../model/UserInfo"

export interface VMIntent { }

export class LoadAll implements VMIntent { }

export class AddUser implements VMIntent {
    constructor(readonly info: UserInfo) { }
}

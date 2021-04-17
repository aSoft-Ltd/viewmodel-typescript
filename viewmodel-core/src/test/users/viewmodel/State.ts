import { User } from "../model/User"

export interface VMState { }

export class Loading implements VMState {
    constructor(readonly message: string) { }
}

export class Failure implements VMState {
    constructor(readonly cause: Error) { }
}

export class Users implements VMState {
    constructor(readonly data: User[]) { }
}

export class Success implements VMState {
    constructor(readonly message: string) { }
}
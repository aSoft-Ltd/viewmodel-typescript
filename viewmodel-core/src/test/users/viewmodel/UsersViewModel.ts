import { ViewModel } from "../../../main"
import * as State from "./State"
import * as Intent from "./Intent"
import { User } from "../model/User"
import { UserInfo } from "../model/UserInfo"


class UsersViewModel extends ViewModel<Intent.VMIntent, State.VMState> {
    private users: User[] = []
    constructor() {
        super(new State.Loading("Preparing working environment for you"))
    }

    post(intent: Intent.VMIntent) {
        if (intent instanceof Intent.AddUser) {
            this.addUser(intent.info)
        } else if (intent instanceof Intent.LoadAll) {
            this.loadAll()
        }
    }

    private addUser(info: UserInfo) {
        const user: User = {
            id: this.users.length,
            name: info.name
        }
        this.users.push(user)
        this.ui.value = new State.Success("Successfully added a user")
    }

    private loadAll() {
        this.ui.value = new State.Users(this.users)
    }
}

export {
    UsersViewModel as ViewModel, State, Intent
}
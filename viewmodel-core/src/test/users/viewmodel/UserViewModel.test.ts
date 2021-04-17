import { ViewModel, State, Intent } from "./UsersViewModel"

describe("Given the UserViewModel", () => {
    it("starts with a loading state", () => {
        const vm = new ViewModel();
        expect(vm.ui.value).toBeInstanceOf(State.Loading)
    })

    it("should have no users",()=>{
        const vm = new ViewModel()
        vm.post(new Intent.LoadAll())
        const users = vm.ui.value as State.Users
        expect(users).toBeInstanceOf(State.Users)
        expect(users.data.length).toBe(0)
    })

    it("Successfully adds a user",()=>{
        const vm = new ViewModel()
        vm.post(new Intent.AddUser({name: "Jumanji"}))
        expect(vm.ui.value).toBeInstanceOf(State.Success)
    })
})
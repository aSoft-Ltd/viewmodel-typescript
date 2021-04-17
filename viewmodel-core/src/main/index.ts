import { Live } from "@asoft-ltd/live-core"

export abstract class ViewModel<I, S> {
    ui: Live<S>
    constructor(initial: S) {
        this.ui = new Live(initial)
    }

    abstract post(intent: I): any
}
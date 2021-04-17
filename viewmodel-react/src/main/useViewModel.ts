import { ViewModel } from "@asoft-ltd/viewmodel-core"
import { useLive } from "@asoft-ltd/live-react"
import { useState, useEffect, useMemo } from "react"

export type UseViewModelResult<I, S> = {
    state: S,
    post: (intent: I) => any
}

export function useViewModel<I, S>(viewModel: ViewModel<I, S>): UseViewModelResult<I, S> {
    const state = useLive(viewModel.ui)
    const post = viewModel.post
    return { state, post }
}
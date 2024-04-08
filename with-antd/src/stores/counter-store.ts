import { createStore } from 'zustand/vanilla'

export type CounterState = {
  count: number
  color: string
}

export type CounterActions = {
  decrementCount: () => void
  incrementCount: () => void
  setColor: (color: string) => void
}

export type CounterStore = CounterState & CounterActions

export const defaultInitState: CounterState = {
  count: 0,
  color: 'blue',
}

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    setColor: (color) => set({ color }),
  }))
}

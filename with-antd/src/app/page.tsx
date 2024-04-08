import { App } from './app'
import { CounterStoreProvider } from '@/providers/counter-store-provider'

export default function Home() {
  return (
    <main>
      <CounterStoreProvider>
        <App />
      </CounterStoreProvider>
    </main>
  )
}

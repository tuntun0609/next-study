'use client'
import { Button, Input } from 'antd'
import { Suspense, useState } from 'react'

import { useCounterStore } from '@/providers/counter-store-provider'

export function Counter() {
  const { count, decrementCount, incrementCount, setColor } = useCounterStore(
    (state) => state
  )
  const [value, setValue] = useState('')
  return (
    <div>
      <span>{count}</span>
      <Button onClick={incrementCount}>one up</Button>
      <Button onClick={decrementCount}>one down</Button>
      <div
        style={{
          display: 'flex',
          gap: 8,
        }}>
        <Input
          style={{ width: 200 }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <Button
          onClick={() => {
            setColor(value)
          }}>
          set color
        </Button>
      </div>
    </div>
  )
}

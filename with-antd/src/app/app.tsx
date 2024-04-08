'use client'

import { useCounterStore } from '@/providers/counter-store-provider'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'
import { Button, ConfigProvider } from 'antd'
import { Counter } from './zustand'

export const App = () => {
  const { color } = useCounterStore((state) => state)
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color,
        },
      }}>
      <Button icon={<VerticalAlignBottomOutlined />}>test</Button>

      <Counter />
    </ConfigProvider>
  )
}

'use client'

import { useCounterStore } from '@/providers/counter-store-provider'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'
import { Button, ConfigProvider } from 'antd'
import { Counter } from './zustand'
import { cookies } from 'next/headers'
import { getCookies } from './actions'

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
      <Button
        onClick={async () => {
          const cookie = await getCookies()
          console.log(cookie)
        }}>
        getCookies
      </Button>
    </ConfigProvider>
  )
}

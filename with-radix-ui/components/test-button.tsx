'use client'
import { Button } from '@radix-ui/themes'
import { getOsInfo } from '@/app/action'

export const TestButton = () => {
  return (
    <Button
      onClick={async () => {
        const osInfo = await getOsInfo()
        console.log(osInfo)
      }}>
      test
    </Button>
  )
}

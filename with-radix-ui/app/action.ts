'use server'
import os from 'os'

export const getOsInfo = async () => {
  // node获取操作系统信息
  return {
    arch: os.arch(),
    cpus: os.cpus(),
    freemem: os.freemem(),
    hostname: os.hostname(),
    networkInterfaces: os.networkInterfaces(),
    platform: os.platform(),
    release: os.release(),
    tmpdir: os.tmpdir(),
    totalmem: os.totalmem(),
    type: os.type(),
    uptime: os.uptime(),
    userInfo: os.userInfo(),
  }
}

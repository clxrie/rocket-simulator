import net from 'net'
import { WebSocketServer } from 'ws'

const PI_HOST = '10.80.49.23'
const PI_PORT = 5555
const BRIDGE_PORT = 8080
const SEND_EVERY_MS = 1000

const server = new WebSocketServer({ port: BRIDGE_PORT })
console.log(`Bridge running: ws://localhost:${BRIDGE_PORT} -> ${PI_HOST}:${PI_PORT}`)

server.on('connection', (browser) => {
  console.log('Dashboard connected')
  const pi = net.createConnection({ host: PI_HOST, port: PI_PORT }, () => {
    console.log('Connected to Pi')
  })
  let buffer = ''
  let latest = null

  browser.on('message', (msg) => {
    pi.write(msg.toString() + '\n')
  })

  pi.on('data', (chunk) => {
    buffer += chunk.toString()
    const lines = buffer.split('\n')
    buffer = lines.pop()
    for (const line of lines) {
      if (line.trim()) latest = line.trim()
    }
  })

  const sendTimer = setInterval(() => {
    if (latest && browser.readyState === browser.OPEN) {
      browser.send(latest)
      latest = null
    }
  }, SEND_EVERY_MS)

  pi.on('error', (err) => {
    console.error('Pi error:', err.message)
    browser.close()
  })
  pi.on('close', () => {
    console.log('Pi disconnected')
    browser.close()
  })
  browser.on('close', () => {
    console.log('Dashboard disconnected')
    clearInterval(sendTimer)
    pi.end()
  })
})
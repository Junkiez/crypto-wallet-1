import { mainWindow } from './index'

export default {
  ping: () => console.log('pong'),
  close: () => mainWindow.close(),
  spam: () => console.log('test'),
}

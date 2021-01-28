import { io } from 'socket.io-client';
import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'

createApp(App).mount('#app')

const socket = io({
  path: 'wss://echo.websocket.org',
  transports: ['websocket'],
  autoConnect: true,
});
console.log(socket);
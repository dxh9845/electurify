import io from 'socket.io-client';

export default class SocketService {
    socket;

    constructor(socketPath) {
      this.socket = io(socketPath);
      this.socket.emit('audio-change', {
        this: 'da shit',
      });
    }
}

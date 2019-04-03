

/**
 * Detect when input has volume and only pass it to the output
 * @class SockletWorkletProcessor
 * @extends AudioWorkletProcessor
 */
class SocketWorkletProcessor extends AudioWorkletProcessor {
  // eslint-disable-next-line class-methods-use-this
  process(inputs, outputs, parameters) {
    console.log(WebSocket);
    // Use the node's inputs and outputs
    const input = inputs[0];
    const output = outputs[0];

    const inputChannel0 = input[0];
    const outputChannel0 = output[0];

    for (let channel = 0; channel < output.length; ++channel) {
      output[channel].set(input[channel]);
    }

    // Keep this from being garbage collected
    return true;
  }
}

registerProcessor('socket-worklet-processor', SocketWorkletProcessor);

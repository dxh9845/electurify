/**
 * Detect when input has volume and only pass it to the output
 * @class VolumeProcessor
 * @extends AudioWorkletProcessor
 */
class VolumeProcessor extends AudioWorkletProcessor {
  static audioReducer() {
    return (accumulator, currentValue) => accumulator + (currentValue ** 2);
  }

  static get parameterDescriptors() {
    return [{ name: 'minVolume', defaultValue: 0.15 }];
  }


  // eslint-disable-next-line class-methods-use-this
  process(inputs, outputs, parameters) {
    // Use the node's inputs and outputs
    const input = inputs[0];
    const output = outputs[0];

    const inputChannel0 = input[0];
    const outputChannel0 = output[0];
    // Get the minimum volume specified
    const { minVolume: minVolumeParam } = parameters;

    // Calculate the volume
    console.log(inputs);
    console.log(output);
    console.log(minVolumeParam);
    // const squaredSum = inputChannel0.reduce(VolumeProcessor.audioReducer);
    // const rmsVol = Math.sqrt(squaredSum / input.length);

    // Did we specify a min volume parameter
    // if (minVolumeParam.length === 1) {
    //   for (let i = 0; i < inputChannel0; i++) {
    //     outputChannel0[i] = rmsVol >= minVolumeParam[0] ? inputChannel0[i] : 0;
    //   }
    // } else {
    //   for (let i = 0; i < inputChannel0; i++) {
    //     outputChannel0[i] = rmsVol >= minVolumeParam[i] ? inputChannel0[i] : 0;
    //   }
    // }
    for (let channel = 0; channel < output.length; ++channel) {
      output[channel].set(input[channel]);
    }

    // Keep this from being garbage collected
    return true;
  }
}

registerProcessor('volume-processor', VolumeProcessor);

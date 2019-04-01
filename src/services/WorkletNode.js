/**
 * @class LectureTranscriberNode
 * @extends AudioWorkletNode
 */
class LectureTranscriberNode extends AudioWorkletNode {
  constructor(context) {
    super(context, 'volume-processor');
  }
}

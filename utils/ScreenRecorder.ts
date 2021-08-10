import { saveAs } from 'file-saver';

const mimeType = 'video/webm; codecs=vp9';

const ScreenRecorder = {
  recordedChunks: [],

  async startRecording() {
    const media = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });
    const stream = new MediaStream(media.getTracks());
    this.mediaRecorder = new MediaRecorder(stream, { mimeType });

    this.mediaRecorder.ondataavailable = (event) => {
      this.recordedChunks.push(event.data);
    };

    this.mediaRecorder.onstop = () => {
      media.getTracks().forEach((track) => track.stop());
      const blob = new Blob(this.recordedChunks, { type: mimeType });
      saveAs(blob, this.generateFilename());
      this.recordedChunks = [];
    };

    this.mediaRecorder.start(500);
  },

  stopRecording() {
    this.mediaRecorder.stop();
  },

  generateFilename() {
    const now = new Date();
    const dateAndTime = now
      .toISOString()
      .substring(0, 16)
      .replace('T', '__')
      .replace(':', '-');
    return `coach-me__${dateAndTime}.webm`;
  },
};

export default ScreenRecorder;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import config from "../config";

const urlSource = config.radio.source;
const crossOrigin = config.radio.crossOrigin || "*";

export const audio = new Audio(urlSource);
audio.crossOrigin = crossOrigin;

export const createAudioContext = () => {
  return new AudioContext();
};

import { Howl } from "howler";
import { getLocalStorage } from "../../utils/helpers/storagEncrypt";
import config from "../config";
const initVol = Number(getLocalStorage("volume"));
const StreamingAudio = new Howl({
  src: [config.radio.source || ""],
  html5: true,
  volume: initVol > 0 ? initVol : 50,
  format: "streaming",
});
export default StreamingAudio;

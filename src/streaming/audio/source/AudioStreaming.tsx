import * as React from "react";
import { IControls } from "../../../redux/reducers/controlls";
import { useSelector } from "react-redux";
import { audio, createAudioContext } from "./audioCTX";

interface ISelector {
  controllerAudioStream: IControls;
}

const AudioStreaming = () => {
  const AudioElement = audio;

  const { play, volume } = useSelector(
    ({ controllerAudioStream }: ISelector) => controllerAudioStream
  );

  const [isStart, setIsStart] = React.useState<boolean>(false);
  const audioCTX = React.useRef<AudioContext>();
  const audioSource = React.useRef<MediaElementAudioSourceNode>();
  const audioGain = React.useRef<GainNode>();

  React.useEffect(() => {
    if (!isStart && play) {
      // Define audio context config
      audioCTX.current = createAudioContext();

      // Define audio media node
      audioSource.current =
        audioCTX.current.createMediaElementSource(AudioElement);

      // Define context tools
      audioGain.current = audioCTX.current.createGain();
      audioSource.current.connect(audioGain.current);
      audioGain.current.connect(audioCTX.current.destination);
      AudioElement.normalize();

      setIsStart(true);
    }
    if (play) {
      void AudioElement.play();
    } else {
      void AudioElement.pause();
    }
  }, [play, isStart, AudioElement]);

  React.useEffect(() => {
    if (audioGain.current) {
      audioGain.current.gain.value = volume;
    }
  }, [volume]);

  return <></>;
};

export default AudioStreaming;

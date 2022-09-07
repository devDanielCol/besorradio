import * as React from "react";
import { Howl, Howler } from "howler";
import config from "../../streaming/config";
import { useSelector } from "react-redux";
import { IControls } from "../../redux/reducers/controlls";

interface ISelector {
  controllerAudioStream: IControls;
}

const streaming = new Howl({
  src: [config.radio.source || ""],
  html5: true,
  volume: 0.5,
  format: "streaming",
});

const AudioStreaming = () => {
  const { play, volume, stop }: IControls = useSelector(
    ({ controllerAudioStream }: ISelector) => controllerAudioStream
  );

  React.useEffect(() => {
    if (play) {
      streaming.play();
    } else {
      streaming.pause();
    }
  }, [play]);

  React.useEffect(() => {
    Howler.volume(volume);
  }, [volume]);

  React.useEffect(() => {
    Howler.stop();
  }, [stop]);

  return <></>;
};

export default AudioStreaming;

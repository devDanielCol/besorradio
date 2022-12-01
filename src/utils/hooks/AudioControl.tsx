import * as React from "react";
import {
  IControls,
  play as onPlay,
  stop,
  loading as onLoading,
} from "../../redux/reducers/controlls";
import { useDispatch, useSelector } from "react-redux";
import StreamingAudio from "../../streaming/audio/Howler";
interface ISelector {
  controllerAudioStream: IControls;
}
const UseAudioCtrl = () => {
  const dispatch = useDispatch();
  const { play: paused, loading } = useSelector(
    ({ controllerAudioStream }: ISelector) => controllerAudioStream
  );

  const [play, setPlay] = React.useState<boolean>(paused);

  StreamingAudio.on("play", () => {
    setPlay(true);
    initLoading(false);
  });
  StreamingAudio.on("pause", () => {
    setPlay(false);
    initLoading(false);
  });
  StreamingAudio.on("stop", () => {
    setPlay(false);
    initLoading(false);
  });
  const playHandler = () => {
    initLoading(true);
    void dispatch(onPlay());
  };
  const stopHandler = () => {
    initLoading(true);
    void dispatch(stop());
  };

  const initLoading = (status: boolean) => {
    dispatch(onLoading(status));
  };
  return { playHandler, stopHandler, play, loading };
};
export default UseAudioCtrl;

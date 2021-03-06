import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setVideoInput, SoraDemoState, updateMediaStream } from "@/slice";

const VideoInput: React.FC = () => {
  const { videoInput, videoInputDevices } = useSelector((state: SoraDemoState) => state);
  const dispatch = useDispatch();
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setVideoInput(event.target.value));
    dispatch(updateMediaStream());
  };
  return (
    <div className="col-auto form-inline flex-nowrap mb-1">
      <label className="mr-1" htmlFor="videoInput">
        videoInput:
      </label>
      <select
        id="videoInput"
        name="videoInput"
        className="custom-select"
        value={videoInput}
        onChange={onChange}
        disabled={videoInputDevices.length === 0}
      >
        {videoInputDevices.map((deviceInfo) => {
          return (
            <option key={deviceInfo.deviceId} value={deviceInfo.deviceId}>
              {deviceInfo.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default VideoInput;

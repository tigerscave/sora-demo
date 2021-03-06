import React from "react";
import { useSelector } from "react-redux";

import { SoraDemoState } from "@/slice";
import { copy2clipboard } from "@/utils";
import { EnabledParameters } from "@/utils";

type Props = {
  enabledParameters: EnabledParameters;
};
const CopyURL: React.FC<Props> = (props) => {
  const state = useSelector((state: SoraDemoState) => state);
  const onClick = (): void => {
    const parameters: string[] = [];
    if (props.enabledParameters.audio) {
      parameters.push(`audio=${state.audio}`);
    }
    if (props.enabledParameters.audioBitRate) {
      parameters.push(`audioBitRate=${state.audioBitRate}`);
    }
    if (props.enabledParameters.audioCodecType) {
      parameters.push(`audioCodecType=${state.audioCodecType}`);
    }
    if (props.enabledParameters.audioInput) {
      parameters.push(`audioInput=${state.audioInput}`);
    }
    if (props.enabledParameters.audioOutput) {
      parameters.push(`audioOutput=${state.audioOutput}`);
    }
    if (props.enabledParameters.autoGainControl) {
      parameters.push(`autoGainControl=${state.autoGainControl}`);
    }
    if (props.enabledParameters.channelId) {
      parameters.push(`channelId=${state.channelId}`);
    }
    if (props.enabledParameters.echoCancellation) {
      parameters.push(`echoCancellation=${state.echoCancellation}`);
    }
    if (props.enabledParameters.echoCancellationType) {
      parameters.push(`echoCancellationType=${state.echoCancellationType}`);
    }
    if (props.enabledParameters.frameRate) {
      parameters.push(`frameRate=${state.frameRate}`);
    }
    if (props.enabledParameters.mediaType) {
      parameters.push(`mediaType=${state.mediaType}`);
    }
    if (props.enabledParameters.metadata && state.enabledMetadata) {
      parameters.push(`metadata=${state.metadata}`);
    }
    if (props.enabledParameters.noiseSuppression) {
      parameters.push(`noiseSuppression=${state.noiseSuppression}`);
    }
    if (props.enabledParameters.resolution) {
      parameters.push(`resolution=${state.resolution}`);
    }
    if (props.enabledParameters.simulcastQuality) {
      parameters.push(`simulcastQuality=${state.simulcastQuality}`);
    }
    if (props.enabledParameters.spotlight) {
      parameters.push(`spotlight=${state.spotlight}`);
    }
    if (props.enabledParameters.spotlightNumber) {
      parameters.push(`spotlightNumber=${state.spotlightNumber}`);
    }
    if (props.enabledParameters.video) {
      parameters.push(`video=${state.video}`);
    }
    if (props.enabledParameters.videoBitRate) {
      parameters.push(`videoBitRate=${state.videoBitRate}`);
    }
    if (props.enabledParameters.videoCodecType) {
      parameters.push(`videoCodecType=${state.videoCodecType}`);
    }
    if (props.enabledParameters.videoInput) {
      parameters.push(`videoInput=${state.videoInput}`);
    }
    parameters.push(`debug=${state.debug}`);
    copy2clipboard(`${location.origin}${location.pathname}?${parameters.join("&")}`);
  };
  return (
    <input
      className="btn btn-light btn-sm ml-1"
      type="button"
      name="copyUrl"
      defaultValue="copy URL"
      onClick={onClick}
    />
  );
};

export default CopyURL;

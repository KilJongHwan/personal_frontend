import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import OBSWebSocket from "obs-websocket-js";
import Common from "../../utils/Common";

const StreamPlayer = () => {
  const [url, setUrl] = useState("");
  const obs = useRef(new OBSWebSocket()); // useRef를 사용하여 obs 인스턴스 관리

  useEffect(() => {
    connectToObs();
  }, []);

  const connectToObs = async () => {
    try {
      await obs.current.connect("localhost:4444", "6OwgeXx7Fdu22Bgr");

      console.log("Success! Connected to OBS.");
      console.log(obs.current);
    } catch (err) {
      console.log("Connection failed: ", err);
    }
  };

  const startStream = async () => {
    if (!obs.current) {
      console.log("OBS connection not established yet.");
      return;
    }

    // OBS에서 스트리밍을 시작합니다.
    try {
      await obs.current.send("StartStreaming");
      // ... 나머지 코드 생략 ...
    } catch (err) {
      console.log("Error starting stream: ", err);
    }

    // 이 예제에서는 임시로 스트림 URL을 설정하였습니다.
    const streamUrl = Common.DOMAIN + `/stream`;
    setUrl(streamUrl);
  };

  return (
    <div>
      <ReactPlayer controls url={url} />
      <button onClick={startStream}>Start Streaming</button>
    </div>
  );
};

export default StreamPlayer;

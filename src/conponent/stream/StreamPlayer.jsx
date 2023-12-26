import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import OBSWebSocket from "obs-websocket-js";

const StreamPlayer = () => {
  const [url, setUrl] = useState("");
  const obs = useRef(new OBSWebSocket()); // useRef를 사용하여 obs 인스턴스 관리

  useEffect(() => {
    connectToObs();
  }, []);

  const connectToObs = async () => {
    try {
      await obs.current.connect("ws://localhost:4444", "QTZwZJJ7KCW3dw94");
      // window.addEventListener("beforeunload", function () {
      //   obs.current.disconnect();
      // });
      obs.on("ConnectionClosed", () => {
        console.log("Connection closed. Reconnecting in 5 seconds...");
        setTimeout(connectToObs, 5000);
      });
      console.log("Success! Connected to OBS.");
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
    } catch (err) {
      console.log("Error starting stream: ", err);
    }

    const streamUrl = `http://localhost:3000/stream`;
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

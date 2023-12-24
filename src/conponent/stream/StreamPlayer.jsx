import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import OBSWebSocket from "obs-websocket-js";

const obs = new OBSWebSocket();

const StreamPlayer = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // OBS 웹소켓에 연결합니다.
    obs
      .connect({
        address: "localhost:4465", // OBS 웹소켓 서버 주소
        password: "abc123", // OBS 웹소켓 비밀번호
      })
      .then(() => {
        console.log("Success! Connected to OBS.");
      })
      .catch((err) => {
        console.log("Connection failed: ", err);
      });
  }, []);

  const startStream = async () => {
    // OBS에서 스트리밍을 시작합니다.
    try {
      await obs.send("StartStreaming");
      console.log("Streaming started");
    } catch (err) {
      console.log("Error starting stream: ", err);
    }

    // 이 예제에서는 임시로 스트림 URL을 설정하였습니다.
    const streamUrl = "http://example.com/live/stream.m3u8";
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

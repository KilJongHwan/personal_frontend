import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import OBSWebSocket from "obs-websocket-js";

const obs = new OBSWebSocket();

const StreamPlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    // OBS 웹소켓에 연결합니다.
    obs
      .connect({
        address: "localhost:4444", // OBS 웹소켓 서버 주소
        password: "yourpassword", // OBS 웹소켓 비밀번호
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
    obs
      .send("StartStreaming")
      .then(() => {
        console.log("Streaming started");
      })
      .catch((err) => {
        console.log("Error starting stream: ", err);
      });

    // 이 예제에서는 임시로 스트림 URL을 설정하였습니다.
    const streamUrl = "http://example.com/live/stream.m3u8";

    if (playerRef.current) {
      playerRef.current.load(streamUrl, true);
    }
  };

  return (
    <div>
      <ReactPlayer ref={playerRef} controls url="" />
      <button onClick={startStream}>Start Streaming</button>
    </div>
  );
};

export default StreamPlayer;

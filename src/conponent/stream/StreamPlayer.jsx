import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import OBSWebSocket from "obs-websocket-js";

const StreamPlayer = () => {
  const [url, setUrl] = useState("");
  const [address, setAddress] = useState("4444"); // OBS 주소 입력 상태
  const [password, setPassword] = useState("QTZwZJJ7KCW3dw94"); // OBS 비밀번호 입력 상태
  const obs = useRef(null); // OBSWebSocket 인스턴스를 저장할 ref

  useEffect(() => {
    obs.current = new OBSWebSocket(); // REF의 현재 값에 OBSWebSocket 인스턴스를 할당
    return () => {
      obs.current.disconnect(); // 컴포넌트 언마운트 시 OBS 연결 해제
    };
  }, []);

  const connectToObs = async () => {
    try {
      // OBSWebSocket 인스턴스의 connect 메서드에 주소와 비밀번호를 전달
      await obs.current.connect(`ws://localhost:${address}`, password);

      // 연결이 끊긴 경우 재연결을 시도하는 이벤트 핸들러
      obs.current.on("ConnectionClosed", () => {
        // console.log("Connection closed. Reconnecting in 5 seconds...");
        // setTimeout(connectToObs, 5000);
      });
      console.log("Success! Connected to OBS.");
    } catch (err) {
      console.error("Connection failed: ", err);
    }
  };

  const startStream = async () => {
    if (!obs.current) {
      console.log("OBS connection not established yet.");
      return;
    }
    try {
      const response = await obs.current.call("GetCurrentProgramScene");
      console.log(response);
      const streamUrl = `http://localhost:8081/hls/mystream.m3u8`;
      setUrl(streamUrl);
    } catch (err) {
      console.error("Error starting stream: ", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="OBS WebSocket Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={connectToObs}>Connect to OBS</button>
      <ReactPlayer controls url={url} />
      <button onClick={startStream}>Start Streaming</button>
    </div>
  );
};

export default StreamPlayer;

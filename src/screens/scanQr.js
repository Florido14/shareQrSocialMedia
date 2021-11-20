import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";

function ScanQr() {
  const history = useHistory();
  const [result, setResult] = useState("No result");

  async function handleScan(data) {
    if (data) {
      setResult(data);
      console.log(data);
      await localStorage.setItem("response", data);
      history.push("/show");
    }
  }

  function handleError(err) {
    console.error(err);
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={(err) => handleError(err)}
        onScan={(data) => handleScan(data)}
        style={{ width: "100%" }}
        legacyMode={false}
        facingMode="user"
      />
    </div>
  );
}

export default ScanQr;

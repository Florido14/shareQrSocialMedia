import React from "react";
import { QRCode } from "react-qr-svg";

class GenerateQr extends React.Component {
  render() {
    return (
      <QRCode
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="Q"
        style={{ width: 50 }}
        value={JSON.stringify({
          id: "123",
          name: "John Doe",
          fb: "www.facebook.com",
          wha: "www.whatsapp.com",
          twi: "www.instagram.com",
          inst: "www.twitter.com",
        })}
      />
    );
  }
}

export default GenerateQr;

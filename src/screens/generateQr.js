import React from "react";
import { QRCode } from "react-qr-svg";

class GenerateQr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("social"));
    console.log(data);
    this.setState({ data: data });
  }

  render() {
    return (
      <QRCode
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="Q"
        style={{ width: 250 }}
        value={JSON.stringify(this.state.data)}
      />
    );
  }
}

export default GenerateQr;

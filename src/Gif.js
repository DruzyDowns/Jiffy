import React, { Component } from "react";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    const { loaded } = this.state;
    const { images } = this.props;
    return (
      <video
        className={`grid-item video ${loaded && "loaded"}`}
        loop
        autoPlay
        src={images.original.mp4}
        onLoadedData={() => this.setState({ loaded: true })}
      />
    );
  }
}

export default Gif;

import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #f0f4f8;
  border-radius: 8px;
  text-align: center;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
`;

const Label = styled.div`
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
`;

class Choice extends Component {
  render() {
    const { sticker } = this.props;

    if (!sticker) {
      return <Box>Click a sticker or use the button to choose one!</Box>;
    }

    return (
      <Box>
        <Image src={sticker.img} alt={sticker.label} />
        <Label>{sticker.label}</Label>
      </Box>
    );
  }
}

export default Choice;

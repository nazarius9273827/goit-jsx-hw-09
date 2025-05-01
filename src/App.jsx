import React, { Component } from "react";
import stickers from "./data/stickers.json";
import StickerList from "./components/StickerList";
import Choice from "./components/Choice";
import styled from "styled-components";

const Container = styled.div`
  padding: 32px;
  max-width: 800px;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #357ab8;
  }
`;

class App extends Component {
  state = {
    selectedSticker: null,
  };

  handleSelect = (label) => {
    const sticker = stickers.find((s) => s.label === label);
    this.setState({ selectedSticker: sticker });
  };

  handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * stickers.length);
    const randomSticker = stickers[randomIndex];
    this.setState({ selectedSticker: randomSticker });
  };

  render() {
    return (
      <Container>
        <StickerList stickers={stickers} onSelect={this.handleSelect} />
        <ButtonWrapper>
          <Button onClick={this.handleRandomSelect}>Випадковий стікер</Button>
        </ButtonWrapper>
        <Choice sticker={this.state.selectedSticker} />
      </Container>
    );
  }
}

export default App;

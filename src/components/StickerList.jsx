import React from "react";
import Sticker from "./Sticker";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

function StickerList({ stickers, onSelect }) {
  return (
    <List>
      {stickers.map((sticker, index) => (
        <Sticker
          key={index}
          img={sticker.img}
          label={sticker.label}
          onClick={() => onSelect(sticker.label)}
        />
      ))}
    </List>
  );
}

export default StickerList;

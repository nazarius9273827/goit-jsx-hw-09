import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: transform 0.3s;
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
  }
`;

function Sticker({ img, label, onClick }) {
  return <Img src={img} alt={label} onClick={onClick} />;
}

export default Sticker;

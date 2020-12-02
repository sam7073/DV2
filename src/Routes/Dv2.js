import React from "react";
import image2 from "../Assets/Images/2.png";
import image3 from "../Assets/Images/3.png";
import styled from "styled-components";

const StyledI = styled.img`
  position: absolute;
  top: 60px;
  right: 0px;
`;

export function Dv2(props) {
  return (
    <>
      <img src={image2} alt="" width="800px" height="600px"></img>
      <StyledI src={image3} alt="" />
    </>
  );
}

export default Dv2;

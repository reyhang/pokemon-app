import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  background: white;
  justify-content: center;
  height: 250px;
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow:
   pink 0px 0px 0px 3px, 
   #c1c1f0 0px 0px 0px 3px,
   lightgray 0px 0px 0px 6px, 
   lightblue 0px 0px 0px 9px,
   #c1c1f0 0px 0px 0px 11px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
  }
`;

export const Title = styled.a`
  color: #ffcbb6;
  text-align: center;
  font-family: "Lucida Console", "Courier New", monospace;
`;

export const PokemonImage = styled.img`
  height: 120px;
  width: 120px;
  margin-top: 20px;
`;

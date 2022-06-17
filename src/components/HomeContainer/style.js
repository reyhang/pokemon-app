import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 10px;
row-gap: 1em;
margin: ${px2vw(32)};
max-width: 100%;
@media (min-width: 400  px) {
    flex-wrap: nowrap;
  }
`
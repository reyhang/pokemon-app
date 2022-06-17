import styled from "styled-components";

export const Container = styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${(props) => props.width};
    -webkit-appearance: none;
    appearance: none;
  }
  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #fff6f2;
  }
  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: #ffcbb6;
  }
`;

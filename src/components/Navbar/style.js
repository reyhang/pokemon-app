import styled from "styled-components";

export const Container = styled.div`
max-width: 100px;
margin: 10px;
padding: ${({ scrolled }) => scrolled ? '0.7rem' : '1rem'} 1rem;
transition: padding 300ms ease-in-out;
display: flex;
justify-content: space-between;
flex-wrap: wrap;`

export const MenuItems = styled.a`
padding: 3px0;
color: #818181;
font-size: 18px;
display: block;
text-decoration: none;
`

export const Title = styled.a`
padding: 3px0;
color: #818181;
font-size: 18px;
display: block;
text-decoration: none;
font-family:"Lucida Console", "Courier New", monospace;
color:#c1c1f0
`

export const StyledNavBar = styled.nav`
  justify-content: space-between;
  align-items: center;
    position: sticky ;
    height:100px;
    width: 100%;
    z-index: 10;
    background-color: white;
    box-shadow: 0 0 15px #c1c1f0 };
`
import { Container, MenuItems, StyledNavBar, Title } from "./style"
import logo from '../../statics/fav.png'



const Navbar =() => {
    return(
        <StyledNavBar>
              <Container>
              <MenuItems href="/">
        <img height={50} src={logo} />
      </MenuItems>
            <Title href="/">Pokemon</Title>
        </Container>
        </StyledNavBar>
      
    )
}



export default Navbar
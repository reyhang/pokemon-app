import {Container} from "./style"

export const HomeContainer = (props) => {
    return (
         <Container>
            {props.children}
         </Container>
    )
}


export default HomeContainer;
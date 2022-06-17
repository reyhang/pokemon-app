import { Link } from "react-router-dom";
import { capitilizer } from "../../utils/util.functions";
import { CardContainer, PokemonImage, Title } from "./style";

export const Card = (props) => {
    return (
      <Link style={{textDecoration:"none"}} to={`/pokemon/${props.name}`}>
          <CardContainer>
            <PokemonImage src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`} />
            <Title>
               { capitilizer(props.name)} 
            </Title>
         </CardContainer>
      </Link>
        
    )
}


export default Card;
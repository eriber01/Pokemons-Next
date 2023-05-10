import { FC, useState } from "react"
import { useRouter } from "next/router"
import { Grid, Card, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from "@/interfaces"
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { localFavorites } from "@/utils"

interface Props {
  pokemon: SmallPokemon
}

const PokemonsCard: FC<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const router = useRouter()

  const onClick = () => {
    router.push(`/name/${pokemon.name}`)
  }

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)
  }

  return (
    <Grid xs={6} sm={4} md={3} xl={2}>
      <Card isHoverable isPressable
      >
        <Card.Body css={{ p: 1 }}
          onClick={() => onClick()}
        >
          <Card.Image
            src={pokemon.img}
            width={'100%'}
            height={140}
          />
        </Card.Body>
        <Card.Footer css={{ textAlign: 'center' }}>
          <Row
            justify="space-between"
            css={{ display: 'flex', alignItems: 'center' }}>
            <Text
              onClick={() => onClick()}
              transform="capitalize">{pokemon.name}</Text>

            {
              isInFavorites ?
                <AiFillStar
                  onClick={() => onToggleFavorite()}
                /> :
                <AiOutlineStar
                  onClick={() => onToggleFavorite()}
                />
            }
            <Text
              onClick={() => onClick()}
            ># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default PokemonsCard
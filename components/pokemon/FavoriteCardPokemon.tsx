import { NextPage } from 'next'
import { useRouter } from 'next/router';
import { Grid, Card } from '@nextui-org/react'

interface Props {
  pokemonId: number
}

export const FavoriteCardPokemon: NextPage<Props> = ({ pokemonId }) => {
  const router = useRouter()

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <Grid key={pokemonId} xs={6} sm={3} md={2} xl={1}
      onClick={() => onFavoriteClicked()}
    >
      <Card isHoverable isPressable css={{ padding: '10' }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  )
}

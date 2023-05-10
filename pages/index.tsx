import { NextPage, GetStaticProps } from "next"

import { Layout } from "@/components/layouts"
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonsCard } from "@/components/pokemon";
import { Grid } from "@nextui-org/react";

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map(item => (
              <PokemonsCard key={item.id} pokemon={item} />
            ))
          }
        </Grid.Container>
      </Layout>
    </>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((item, index) => {
    // const { data } = await pokeApi.get<PokemonDetails>(item.url)
    return {
      ...item,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
import { pokeApi } from "@/api"
import { Pokemon, SmallPokemon } from "@/interfaces"

const toggleFavorites = (id: number) => {

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites = (id: number): boolean => {

  if (typeof window === 'undefined') return false

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  return favorites.includes(id)
}

const pokemons = (): number[] => {
  // if (typeof window === 'undefined') return []

  const ids: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  // console.log('los ids: ', ids);

  // const pokemons = await Promise.all(ids.map(async item => {
  //   const { data } = await pokeApi.get<Pokemon>(`pokemon/${item}`)

  //   return {
  //     id: data.id,
  //     name: data.name,
  //     img: data.sprites.other?.dream_world.front_default || '',
  //     url: data.sprites.other?.dream_world.front_default || ''
  //   }
  // }))

  // console.log(pokemons);


  return ids || []
}

export default {
  toggleFavorites,
  existInFavorites,
  pokemons
}
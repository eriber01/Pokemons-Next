import { pokeApi } from "@/api"
import { Pokemon } from "@/interfaces"

export const getPOkemonInfo = async (value: string) => {

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${value}`)

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
}
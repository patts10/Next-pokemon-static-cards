import { useEffect, useState } from 'react'

import { Card, Grid } from '@nextui-org/react'

import { Layout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui'
import { localFavorites } from '@/Utils'
import { FavoritePokemons } from '@/components/pokemon'

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Pokemons - Favorites'>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
      <NoFavorites />
    </Layout>
  )
}

export default FavoritesPage

import { Container, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 100px)',
          flexDirection: 'column',
          alignSelf: 'center'
        }}
      >
        <Text h1>There is no favorites</Text>
        <Image
          src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'}
          alt='No favorites'
          width={250}
          height={250}
          css={{opacity: 0.1}}
        />
      </Container>
  )
}
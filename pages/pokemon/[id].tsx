import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '@/components/layouts'
import { pokeApi } from '@/api'
import { Pokemon } from '@/interfaces'
import { Button, Card, Container, Grid, Text } from '@nextui-org/react'
import Image from 'next/image'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  console.log(pokemon)
  
  return (
    <Layout title='Pokemon'>
      
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{padding: '30px'}}>
            <Card.Body>
              <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default || 'No-image.png'} 
                alt={pokemon.name}
                width={'100%'} 
                height={200}
                />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>

              <Button
                color={'gradient'}
                ghost
              >
                Add to favorites
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default || 'No-image.png'}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny || 'No-image.png'}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny || 'No-image.png'}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>

            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)
  
  
  return {
    paths: pokemon151.map((id) => ({ 
      params: { id } 
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const { id } = params as { id: string};
  
  const { data} = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);
  console.log(data);

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage

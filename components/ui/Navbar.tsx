import Link from 'next/link'

import { Spacer, Text, useTheme } from '@nextui-org/react'
import NextLink from 'next/link'

import Image from 'next/image'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 50px',
        backgroundColor: theme?.colors.gray100.value
      }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        alt='App icon'
        width={70}
        height={70}
      />
      <Link href={'/'} legacyBehavior>
        <a style={{ display: 'flex' }}>
          <Text color='white' h2>
            p
          </Text>
          <Text color='white' h3>
            okemón
          </Text>
        </a>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href={'/favorites'}>
        <Text color='white'>Favorites</Text>
      </Link>
    </div>
  )
}

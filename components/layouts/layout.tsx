import { FC, PropsWithChildren } from "react"

import Head from "next/head"

import { Navbar } from "../ui"


const origin = (typeof window === 'undefined') ? '' : (window as any).location.origin

export const Layout: FC<PropsWithChildren<{title: string}>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Jona Mendoza' />
        <meta name='description' content={`Information about pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Info about ${title}}`} />
        <meta property="og:description" content={`Page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px',
      }}>
        {children}
      </main>
    </>
  )
}
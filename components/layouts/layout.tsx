import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from "../ui"

export const Layout: FC<PropsWithChildren<{title: string}>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Jona Mendoza' />
        <meta name='description' content={`Information about pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
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
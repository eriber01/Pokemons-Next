import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTheme, Text, Spacer, Link } from '@nextui-org/react'
import NextLink from 'next/link'

export const Navbar = () => {

  const { theme } = useTheme()
  const router = useRouter()
  return (
    <div
      style={{
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray50.value
      }}
    >
      <Link href='/' as={NextLink}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt='Icono de la App'
          width={70}
          height={70}
        // onClick={() => router.push('/')}
        />
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemon</Text>
      </Link>

      <Spacer css={{ flex: '1' }} />
      <Link
        css={{ marginRight: '10px' }}
        href='/favorites' as={NextLink}>
        <Text color='white' >Favoritos</Text>
      </Link>
    </div>
  )
}
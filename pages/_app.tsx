// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

type Props = AppProps;

function MyApp(props: Props) {
  return (
    <ChakraProvider>
      <props.Component {...props.pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
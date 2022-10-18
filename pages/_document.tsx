import {ColorModeScript, useColorMode} from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta name="Kakarot" content="Ethereum Virtual Machine written in Cairo" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
            </Head>
            <body style={{background: "white"}}>
                <ColorModeScript initialColorMode="light" />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
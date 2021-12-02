import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@400;500&family=Open+Sans&family=Poppins&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
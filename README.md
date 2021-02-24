This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## mexer na tag head

```bash
    touch src/pages/_document.tsx

```

e nesse arquivo

```code
    import Document, { Html, Head, Main, NextScript } from 'next/document';

    export default class MyDocument extends Document {
        render() {
            return (
                <Html>
                    <Head>
                        {/*e agora posso colocar as fontes do google lembrando de fechar as tags sem conteúdo*/}
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            );
        }
    }

```

as fontes foram colocadas nesse arquivo _document.tsx porque ele carrega uma unica vez tornando-se menos custoso, e por isso _document.tsx e não _app.tsx

## CSS modules

    CSS que afeta apenas um unico componente dentro da aplicação.
    foi trocado o nome das classes com hifens para camelCase

## Context API
    Comunicação entre componentes, repassar informações e funções.
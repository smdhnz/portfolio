import { type AppType } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import { RouterTransition } from "~/components/func";

export const App: AppType = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>fumiya - portfolio</title>
        <meta name="description" content="fumiyaのポートフォリオ" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Analytics />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "Zen maru Gothic",
          globalStyles: () => ({
            body: {
              backgroundColor: "#f9f9f9",
              color: "#1f1f1f",
            },
          }),
        }}
      >
        <RouterTransition color="gray" />
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </MantineProvider>
    </>
  );
};

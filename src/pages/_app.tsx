import { type AppType } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { AnimatePresence } from "framer-motion";

import { api } from "~/utils/api";
import { RouterTransition } from "~/components/RouterTransition";
import { Wrapper } from "~/components/Wrapper";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>fumiya - portfolio</title>
        <meta name="description" content="Fumiyaのポートフォリオ" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "Zen maru Gothic",
        }}
      >
        <RouterTransition />
        <AnimatePresence mode="wait">
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </AnimatePresence>
      </MantineProvider>
    </>
  );
};

export default api.withTRPC(MyApp);

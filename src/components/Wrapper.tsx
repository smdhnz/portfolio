import type { ReactNode } from "react";
import { Box, Group, Container, Stack, Image, Text } from "@mantine/core";
import { motion } from "framer-motion";

import { Link } from "./Link";
import { pageTransition } from "~/animations/variants";
import { SnsLinks } from "./SnsLinks";

export const Wrapper = (props: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f9f9f9",
        color: "#1f1f1f",
      }}
    >
      <motion.div {...pageTransition}>
        <Group pos="fixed" top={24} right={24} spacing="lg">
          <Link href="/">about</Link>
          <Link href="/post">post</Link>
        </Group>

        <Container size="sm" py={125}>
          <Stack spacing={48}>
            <Stack spacing="xs">
              <Image
                src="/image.jpg"
                alt="profile image"
                mah={200}
                maw={200}
                radius={100}
                withPlaceholder
                mx="auto"
                sx={{
                  borderColor: "#111",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: 100,
                }}
              />
              <Text weight="bold" size={60} mx="auto">
                Fumiya Kato
              </Text>
              <SnsLinks mx="auto" />
            </Stack>
            {props.children}
          </Stack>
        </Container>
      </motion.div>
    </Box>
  );
};

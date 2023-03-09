import type { ReactNode } from "react";
import { Box, Group, Container, Stack, Flex, Text } from "@mantine/core";
import Image from "next/image";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";

import { Link } from "~/components/ui";
import { pageTransition } from "~/animations/variants";

export const Wrapper = (props: { children: ReactNode }) => {
  return (
    <motion.div {...pageTransition}>
      <Group pos="fixed" top={24} right={24} spacing="lg">
        <Link href="/">about</Link>
        <Link href="/post">post</Link>
      </Group>

      <Container size="sm" py={125}>
        <Stack spacing="xs" mb={48} align="center">
          <Box
            component={Image}
            src="/image.jpg"
            alt="profile image"
            height={200}
            width={200}
            sx={{
              borderColor: "#f4f4f4",
              borderStyle: "solid",
              borderWidth: 3,
              borderRadius: 100,
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Text weight="bold" size={60}>
            fumiya kato
          </Text>
          <Group>
            <Link href="https://github.com/smdhnz" size={32}>
              <AiOutlineGithub />
            </Link>
            <Link href="https://twitter.com/2383k" size={32}>
              <AiOutlineTwitter />
            </Link>
            <Link href="https://www.instagram.com/smdhnz_/" size={32}>
              <AiFillInstagram />
            </Link>
          </Group>
        </Stack>
        <Flex>{props.children}</Flex>
      </Container>
    </motion.div>
  );
};

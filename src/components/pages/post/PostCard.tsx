import { Text, Card, Flex, Box } from "@mantine/core";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { fadeInUp } from "~/animations/variants";

export const PostCard = ({
  post,
}: {
  post: {
    title: string;
    id: number;
    images: { url: string }[];
  };
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden").catch((e) => console.log(e));
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <Card
        shadow="xl"
        withBorder
        radius="md"
        bg="#222222"
        p={0}
        sx={{
          transition: "transform 0.15s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Flex align="center" h={110}>
          <Box w={160} h="100%" bg="#1a1a1a" ta="center">
            <Image
              src={post.images[0]?.url ?? ""}
              alt={post.title}
              width={256}
              height={256}
              style={{
                width: "auto",
                height: "100%",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
          <Text ta="center" p={32} weight="bold" size={32}>
            {post.title}
          </Text>
        </Flex>
      </Card>
    </motion.div>
  );
};

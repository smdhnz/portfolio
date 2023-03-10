import type { ReactNode } from "react";
import { Stack, Text } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { fadeInUp } from "~/animations/variants";

/** プロフィールのアイテム **/
export const Item = (props: { label: string; children: ReactNode }) => {
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
      <Stack spacing="xs">
        <Text weight="bold" size={24}>
          {props.label}
        </Text>
        <Text>{props.children}</Text>
      </Stack>
    </motion.div>
  );
};

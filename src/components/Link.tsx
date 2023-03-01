import { Text } from "@mantine/core";
import NextLink from "next/link";
import type { TextProps } from "@mantine/core";

export const Link = (props: TextProps & { href: string }) => {
  return (
    <Text
      component={NextLink}
      scroll={false}
      weight="bold"
      size="md"
      sx={{
        transition: "transform 0.1s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      {...props}
    >
      {props.children}
    </Text>
  );
};

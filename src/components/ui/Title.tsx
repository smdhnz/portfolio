import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";

export const Title = (props: TextProps) => {
  return (
    <Text weight="bold" size={48} color="dimmed" {...props}>
      {props.children}
    </Text>
  );
};

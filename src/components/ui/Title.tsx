import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";

export const Title = ({ label, ...props }: { label: string } & TextProps) => {
  return (
    <Text weight="bold" size={48} color="dimmed" {...props}>
      {label}
    </Text>
  );
};

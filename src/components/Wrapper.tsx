import type { ReactNode } from "react";
import { Box } from "@mantine/core";

export const Wrapper = (props: { children: ReactNode }) => {
  return (
    <Box
      sx={(theme) => ({
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: -1,
        background: "rgb(33, 36, 45)",
      })}
    >
      {props.children}
    </Box>
  );
};

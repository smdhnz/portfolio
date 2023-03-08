import { type NextPage } from "next";
import { Stack } from "@mantine/core";

import { Title } from "~/components/ui";
import { Wrapper } from "~/components/layout";

export const Post: NextPage = () => {
  return (
    <Wrapper>
      <Stack spacing={48} w="100%">
        <Title label="post" mx="auto" />
      </Stack>
    </Wrapper>
  );
};

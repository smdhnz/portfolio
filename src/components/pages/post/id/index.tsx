import { type NextPage } from "next";
import { Stack } from "@mantine/core";

import { Title } from "~/components/ui";
import { Wrapper } from "~/components/layout";

export const PostOne: NextPage = () => {
  return (
    <Wrapper>
      <Stack spacing={48} w="100%">
        <Title mx="auto">post title</Title>
      </Stack>
    </Wrapper>
  );
};

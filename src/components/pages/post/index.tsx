import { type NextPage } from "next";
import { Stack } from "@mantine/core";
import { useState } from "react";

import { Title } from "~/components/ui";
import { Wrapper } from "~/components/layout";
import { api } from "~/utils/api";

export const Post: NextPage = () => {
  const [page, setPage] = useState(1);
  const query = api.post.list.useQuery({ page });

  return (
    <Wrapper>
      <Stack spacing={48} w="100%">
        <Title mx="auto">post</Title>
        {query.data?.items.map((item) => (
          <div key={item.id}>{item.value}</div>
        ))}
      </Stack>
    </Wrapper>
  );
};

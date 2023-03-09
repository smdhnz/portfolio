import { type NextPage } from "next";
import { Stack, Text, UnstyledButton, Group } from "@mantine/core";

import { Title } from "~/components/ui";
import { Wrapper } from "~/components/layout";
import { PostCard } from "./PostCard";
import { api } from "~/utils/api";

export const Post: NextPage = () => {
  const { data, fetchNextPage } = api.post.list.useInfiniteQuery(
    { limit: 6 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const handleFetchNextPage = () => {
    fetchNextPage().catch((e) => console.error(e));
  };

  return (
    <Wrapper>
      <Stack spacing={48} w="100%">
        <Title mx="auto">post</Title>
        <Stack align="stretch" spacing="xl">
          {data?.pages.map((d) => {
            return d.items.map((i) => <PostCard key={i.id} post={i} />);
          })}
          <Group position="center">
            <UnstyledButton onClick={handleFetchNextPage}>
              <Text
                weight="bold"
                size="md"
                color="dimmed"
                sx={{
                  transition: "transform 0.15s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                もっと読み込む
              </Text>
            </UnstyledButton>
          </Group>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

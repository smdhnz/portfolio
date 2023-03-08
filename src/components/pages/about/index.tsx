import { type NextPage } from "next";
import { Stack } from "@mantine/core";

import { Item } from "./Item";
import { Title } from "~/components/ui";
import { Wrapper } from "~/components/layout";

export const About: NextPage = () => {
  return (
    <Wrapper>
      <Stack spacing={48} w="100%">
        <Title mx="auto">about</Title>
        <Item label="好きなこと">
          バイク / ゲーム / 旅行 / 飲み会 / お絵描き
        </Item>
        <Item label="乗ってるバイク">Honda GB350</Item>
        <Item label="プレイするゲーム">OverWatch2 / Varorant / Minecraft</Item>
        <Item label="飲むお酒">ビール / 日本酒</Item>
        <Item label="仕事">建設業の社内SE</Item>
        <Item label="愛用エディタ">Neovim</Item>
        <Item label="ちょっとわかるスキル">
          TypeScript / React / Python / Docker
        </Item>
        <Item label="ほんのちょっとわかるスキル">
          HTML / CSS / Deno / JavaScript / VBA / ShellScript
        </Item>
        <Item label="すこしかじった程度のスキル">AWS / GCP / ML</Item>
      </Stack>
    </Wrapper>
  );
};

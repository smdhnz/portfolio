import { type NextPage } from "next";
import { Container, Stack, Image, Text } from "@mantine/core";

import { ProfileItem } from "~/components/ProfileItem";

const Home: NextPage = () => {
  return (
    <>
      <Text weight="bold" size={48} mx="auto" color="dimmed">
        Profile
      </Text>

      <ProfileItem title="好きなこと">
        バイク / ゲーム / 旅行 / 飲み会 / お絵描き
      </ProfileItem>

      <ProfileItem title="乗ってるバイク">Honda GB350</ProfileItem>

      <ProfileItem title="プレイするゲーム">
        OverWatch2 / Varorant / Minecraft
      </ProfileItem>

      <ProfileItem title="飲むお酒">ビール / 日本酒</ProfileItem>

      <ProfileItem title="仕事">建設業の社内SE</ProfileItem>

      <ProfileItem title="愛用エディタ">Neovim</ProfileItem>

      <ProfileItem title="ちょっとわかるスキル">
        TypeScript / React / Python / Docker
      </ProfileItem>

      <ProfileItem title="ほんのちょっとわかるスキル">
        HTML / CSS / Deno / JavaScript / VBA / ShellScript
      </ProfileItem>

      <ProfileItem title="すこしかじった程度のスキル">
        AWS / GCP / ML
      </ProfileItem>
    </>
  );
};

export default Home;

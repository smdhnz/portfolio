import { type NextPage } from "next";
import { Stack, Image, Text, Group, Paper, Timeline, Box } from "@mantine/core";
import { IoLogoPython, IoMdSchool } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FaDocker, FaBaby } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { HiOfficeBuilding } from "react-icons/hi";

const Home: NextPage = () => {
  return (
    <Stack spacing={48} px={20} py={100} align="center">
      <Paper shadow="xl" radius={125}>
        <Image
          src="/image.jpg"
          alt="profile image"
          mah={250}
          maw={250}
          radius={125}
        />
      </Paper>

      <Text weight="bolder" size={80}>
        Fumiya Kato
      </Text>

      <Text weight="bold" color="dimmed">
        99's / Honda GB350 Rider / Engineer / Game Lover
      </Text>

      <Stack align="center" spacing={6}>
        <Text weight="bold" color="dimmed" size={24}>
          Skills
        </Text>
        <Paper shadow="xl" radius="lg" p="md">
          <Group>
            {[DiReact, SiNextdotjs, FaDocker, IoLogoPython].map((elem, i) => (
              <Box key={i} component={elem} size={48} />
            ))}
          </Group>
        </Paper>
      </Stack>

      <Stack align="center" spacing={6}>
        <Text weight="bold" color="dimmed" size={24}>
          Career
        </Text>
        <Paper shadow="xl" radius="lg" p="xl">
          <Timeline active={1} bulletSize={32} lineWidth={2}>
            <Timeline.Item
              color="gray"
              bullet={<FaBaby size={20} />}
              title="誕生"
            >
              <Text color="dimmed" size="sm">
                1999年 宮城県泉市の病院にて産まれる
              </Text>
            </Timeline.Item>
            <Timeline.Item
              color="gray"
              bullet={<IoMdSchool size={20} />}
              title="都立産業技術高等専門学校"
            >
              <Text color="dimmed" size="sm">
                荒川キャンパスの情報通信工学コース卒業
                <br />
                卒業研究ではAIを用いた音声ノイズリダクションについて研究した
              </Text>
            </Timeline.Item>
            <Timeline.Item
              color="gray"
              bullet={<HiOfficeBuilding size={20} />}
              title="朝日エティック株式会社"
            >
              <Text color="dimmed" size="sm">
                社内IT部門所属
                <br />
                社員へのヘルプデスク業務・ファイルサーバー構築・社内向けWebアプリ開発
              </Text>
            </Timeline.Item>
          </Timeline>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default Home;

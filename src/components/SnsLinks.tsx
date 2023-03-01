import type { GroupProps } from "@mantine/core";
import { Group } from "@mantine/core";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { Link } from "./Link";

export const SnsLinks = (props: GroupProps) => {
  return (
    <Group {...props}>
      <Link href="https://github.com/smdhnz" size={32}>
        <AiOutlineGithub />
      </Link>
      <Link href="https://twitter.com/2383k" size={32}>
        <AiOutlineTwitter />
      </Link>
      <Link href="https://www.instagram.com/smdhnz_/" size={32}>
        <AiFillInstagram />
      </Link>
    </Group>
  );
};

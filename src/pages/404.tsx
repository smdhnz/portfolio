import { type NextPage } from "next";
import { Text } from "@mantine/core";

const NotFound: NextPage = () => {
  return (
    <>
      <Text weight="bold" size={64} mx="auto" color="dimmed">
        404 NotFound
      </Text>
    </>
  );
};

export default NotFound;

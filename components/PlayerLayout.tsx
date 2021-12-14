import { Box } from "@chakra-ui/layout";
import SideBar from "./SideBar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        width="250px"
        bg="red"
        height="calc(100vh - 100px)"
        position="absolute"
        left="0"
        top="0"
      >
        <SideBar />
      </Box>
      <Box marginLeft="250px">{children}</Box>
      <Box
        width="100vw"
        bg="green"
        height="100px"
        position="absolute"
        left="0"
        bottom="0"
      >
        Bottom Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;

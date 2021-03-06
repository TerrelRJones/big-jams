import React, { ReactElement } from "react";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

interface Props {}

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Libray",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/create-playlist",
  },
  {
    name: "Favorite Songs",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playListItems = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

function SideBar({}: Props): ReactElement {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="5px" height="100%">
        <Box
          width="100%"
          marginBottom="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="40"
          fontWeight="900"
          color="gray.400"
        >
          <h1>BIG JAMS</h1>
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem
                paddingX="20px"
                fontSize="16px"
                fontWeight="700"
                key={menu.name}
              >
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginTop="20px" marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem
                paddingX="20px"
                fontSize="16px"
                fontWeight="700"
                key={menu.name}
              >
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box width="100%" paddingX="20px">
          <Divider color="gray.800" />
        </Box>
        <Box height="80%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playListItems.map((item) => (
              <ListItem paddingX="20px" key={item}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{item}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;

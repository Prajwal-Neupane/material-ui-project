import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import {
  AccountBox,
  DarkMode,
  Home,
  Layers,
  OndemandVideo,
  PeopleAlt,
  Settings,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        margin: 5,
      }}
      flex={1}
      p={2}
    >
      <Box position={"fixed"}>
        <List sx={{ alignItems: "center" }}>
          <ListItem sx={{ alignItems: "center" }} disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home sx={{ color: "grey" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Videos">
              <ListItemIcon>
                <OndemandVideo sx={{ color: "grey" }} />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Friends">
              <ListItemIcon>
                <PeopleAlt sx={{ color: "grey" }} />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Profile">
              <ListItemIcon>
                <AccountBox sx={{ color: "grey" }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#People">
              <ListItemIcon>
                <Layers sx={{ color: "grey" }} />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Settings">
              <ListItemIcon>
                <Settings sx={{ color: "grey" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Mode">
              <ListItemIcon>
                <DarkMode sx={{ color: "grey" }} />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

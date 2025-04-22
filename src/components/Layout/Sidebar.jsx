import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import FolderIcon from "@mui/icons-material/Folder";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";

const drawerWidth = 45;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#2D446E",
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
        }}
      >
        <List sx={{ padding: "10px 0" }}>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <AddCircleOutlineIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <DescriptionIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <FolderIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <CalendarTodayIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
        </List>

        <Divider
          sx={{ backgroundColor: "#3a5183", width: "60%", margin: "5px 0" }}
        />

        <List sx={{ padding: "10px 0" }}>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <SearchIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <AppsIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <List sx={{ padding: "10px 0" }}>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <HelpOutlineIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
          <ListItem button sx={{ justifyContent: "center", padding: "10px 0" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#2D446E",
        boxShadow: "none",
        height: "40px",
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          minHeight: "40px",
          padding: "0 10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1, padding: "4px" }}
          >
            <MenuIcon fontSize="small" />
          </IconButton> */}
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontWeight: "bold",
              letterSpacing: "1px",
              fontSize: "16px",
            }}
          >
            TECHYON
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" size="small" sx={{ padding: "4px" }}>
            <SearchIcon fontSize="small" />
          </IconButton>

          <IconButton
            color="inherit"
            size="small"
            sx={{ padding: "4px", ml: 1 }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>

          <IconButton
            color="inherit"
            size="small"
            sx={{ padding: "4px", ml: 1 }}
          >
            <Badge
              badgeContent={1}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  height: "14px",
                  minWidth: "14px",
                  fontSize: "10px",
                },
              }}
            >
              <NotificationsNoneIcon fontSize="small" />
            </Badge>
          </IconButton>

          <Avatar
            sx={{
              width: 24,
              height: 24,
              ml: 1,
              backgroundColor: "#336699",
              fontSize: "12px",
            }}
          >
            JD
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

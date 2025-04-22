import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TaskStatusColumn from "./TaskStatusColumn";
import { projectStatuses, mockTasks } from "../../mockData";

const TasksSection = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" component="h1" sx={{ fontWeight: 500 }}>
          All Tasks
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Select
            value="All Tasks"
            displayEmpty
            renderValue={() => "All Tasks"}
            variant="standard"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              mr: 2,
              ".MuiSelect-select": {
                py: 0.5,
                pl: 0,
                pr: 2,
              },
              "&:before, &:after": { display: "none" },
            }}
          >
            <MenuItem value="All Tasks">All Tasks</MenuItem>
            <MenuItem value="My Tasks">My Tasks</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>

          <IconButton
            aria-label="list view"
            sx={{
              color: "#000",
              bgcolor: "#fff",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px 0 0 4px",
              mr: "1px",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ViewListIcon fontSize="small" />
          </IconButton>

          <IconButton
            aria-label="grid view"
            sx={{
              color: "#000",
              bgcolor: "#fff",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              borderRadius: "0 4px 4px 0",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ViewModuleIcon fontSize="small" />
          </IconButton>

          <IconButton sx={{ ml: 1 }}>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {projectStatuses.map((status) => (
          <Grid item xs={12} sm={6} md={3} key={status.id}>
            <TaskStatusColumn
              title={status.label}
              color={status.color}
              count={mockTasks.filter((t) => t.status === status.id).length}
              tasks={mockTasks.filter((t) => t.status === status.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TasksSection;

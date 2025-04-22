import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Checkbox,
  LinearProgress,
  Avatar,
  Grid,
} from "@mui/material";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const TaskCard = ({ task, statusColor }) => {
  const taskId = `${task.id}-${task.id + 11}`;

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: 2,
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardContent sx={{ p: "16px", "&:last-child": { pb: "16px" } }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
          <Checkbox size="small" sx={{ p: 0, mr: 1.5 }} />
          <Typography variant="body1" fontWeight={500} sx={{ flex: 1 }}>
            {task.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {taskId}
          </Typography>
        </Box>

        <Box sx={{ px: 0.5, mb: 2 }}>
          <LinearProgress
            variant="determinate"
            value={task.progress}
            sx={{
              height: 6,
              borderRadius: 3,
              mb: 0.5,
              backgroundColor: "rgba(0, 0, 0, 0.08)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: statusColor,
              },
            }}
          />
          <Typography variant="caption" color="text.secondary">
            {task.progress}%
          </Typography>
        </Box>

        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }}
              />
              <Typography variant="caption" color="text.secondary">
                {task.startDate} - {task.endDate}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Box sx={{ display: "flex", mr: 1 }}>
                {[...Array(3)].map((_, i) => (
                  <Avatar
                    key={i}
                    sx={{
                      width: 24,
                      height: 24,
                      fontSize: "0.75rem",
                      bgcolor: "grey.300",
                      border: "1px solid white",
                      ml: i > 0 ? -1 : 0,
                    }}
                  >
                    P
                  </Avatar>
                ))}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <InsertDriveFileOutlinedIcon
                  sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }}
                />
                <Typography variant="caption" color="text.secondary">
                  {task.files} Files
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TaskCard;

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { LogoutOutlined, AddBoxOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import assets from "../../assets";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const addBoard = async () => {};
  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{
        width: 250,
        height: "100vh",
        "& >div": { borderRight: "none" },
      }}
    >
      <List
        disablePadding
        sx={{
          width: 250,
          height: "100vh",
          backgroundColor: assets.colors.secondary,
        }}
      >
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight={700}>
              {user.username}
            </Typography>
            <IconButton onClick={logout}>
              <LogoutOutlined fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
        <Box sx={{ paddingTop: "10px" }} />
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight={700}>
              Favourites
            </Typography>
          </Box>
        </ListItem>
        <Box sx={{ paddingTop: "10px" }} />
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              Private
            </Typography>
            <IconButton onClick={addBoard}>
              <AddBoxOutlined fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

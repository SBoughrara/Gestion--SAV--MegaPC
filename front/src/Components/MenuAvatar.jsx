import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [user, setUser] = useState({});
  const [emp, setemp] = useState({
    first_name: "Jim",
    last_name: "ssssssssss",
    adresse: "789 Road, City",
    numero: "1112223333",
    photo: "photo_link",
    email: "employee1@example.com",
    role: "technicien",
  });

  var token = "";
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");

      axios
        .get("http://localhost:3000/auth/me", {
          headers: { Authorization: "Bearer " + token },
        })
        .then(function (response) {
          console.log(response.data, "resss");
          setUser(response.data);
          console.log(user, "thisssssssssssssssss ");
          axios
            .get(`http://localhost:3000/employees/${response.data.id}`)
            .then(function (response) {
              console.log(response);
              setemp(response.data);
              console.log(
                emp,
                "hjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
              );
            })
            .catch(function (error) {
              console.log("rahouu");
              // navigate(-1);
            });
        })
        .catch(function (error) {
          console.log("rahouu");
          // navigate(-1);
        });
    }
  }, []);
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt="proflie"
              sx={{ width: 32, height: 32 }}
              src={emp.photo}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to={"/profile"} className="text-decoration-none text-reset">
          <MenuItem onClick={handleClose}>
            <Avatar src={emp.photo} alt="proflie" /> Profile
          </MenuItem>
        </Link>
        <MenuItem
          onClick={() => {
            localStorage.removeItem("token");
            window.location.pathname = "/";
            handleClose();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

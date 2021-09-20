import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {logout} from '../../Store/actions/authActions'
import { connect } from "react-redux";

function MenuList(props) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClicklink() {
    history.push("/");
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography style={{marginRight: "14px"}}sx={{ minWidth: 100 }}>
           <Link to="/posted" style={{ textDecoration: "none",color:"#ffff" }}>Post a Job</Link> 
        </Typography>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
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
            "&:before": {
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
        <MenuItem onClick={(e)=>{
          props.logout()
          handleClicklink()
        }}>
        Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default connect(null, { logout })(MenuList);
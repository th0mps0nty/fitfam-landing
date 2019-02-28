import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("featured")}>
          Online Store Opens In:
        </ListItem>
        <ListItem button onClick={() => console.log("Login")}>
          Login
        </ListItem>
        <ListItem button onClick={() => console.log("Menu")}>
          Menu
        </ListItem>
        <ListItem button onClick={() => console.log("Meal Plans")}>
          Meal Plans
        </ListItem>
        <ListItem button onClick={() => console.log("About")}>
          About
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;

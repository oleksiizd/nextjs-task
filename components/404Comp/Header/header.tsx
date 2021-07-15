import useStyles from "../styles";
import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ right: open });
    };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Pricing", "Blog", "DashBoard"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.header}>
      <div className={classes.groupLogo}>
        <Image
          width="72px"
          height="50px"
          src="/GroupLogo.svg"
          alt="Group Logo"
        />
      </div>
      <div>
        <div className={classes.menuButton}>
          <Button
            onClick={toggleDrawer(true)}
            startIcon={<MenuIcon />}
            size="large"
            color="inherit"
          ></Button>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </div>
        <div className={classes.topButtons}>
          <Button className={classes.pricing}>Pricing</Button>
          <Button className={classes.blog}>Blog</Button>
          <Button className={classes.dashboard}>Dashboard</Button>
        </div>
      </div>
    </div>
  );
}

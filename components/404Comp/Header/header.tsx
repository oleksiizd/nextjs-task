import useStyles from "../styles";
import React, { useCallback, useMemo } from "react";
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
  const [isOpen, setOpen] = React.useState(false);

  const toggleDrawerOpen = useCallback(
    (open: boolean) => () => {
      console.log("Mouse");
      return setOpen(open);
    },
    [setOpen]
  );
  const toggleDrawerKeyDown = useCallback(
    (open: boolean) => (event: React.KeyboardEvent) => {
      console.log("Keyboard");
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    },
    [setOpen]
  );

  const list = useMemo(() => {
    return (
      <div
        role="presentation"
        onClick={toggleDrawerOpen(false)}
        onKeyDown={toggleDrawerKeyDown(false)}
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
  }, [toggleDrawerOpen, toggleDrawerKeyDown]);

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
            onClick={toggleDrawerOpen(true)}
            startIcon={<MenuIcon />}
            size="large"
            color="inherit"
          />
          <Drawer
            anchor="right"
            open={isOpen}
            onClose={toggleDrawerOpen(false)}
          >
            {list}
          </Drawer>
        </div>
        <div className={classes.topButtons}>
          <div className={classes.headerButton}>
            <Button color="inherit">Pricing</Button>
          </div>
          <div className={classes.headerButton}>
            <Button color="inherit">Blog</Button>
          </div>
          <div className={classes.headerButton}>
            <Button color="inherit">Dashboard</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

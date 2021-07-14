import useStyles from "./styles";
import React from "react";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import Image from "next/image";
import Head from "next/head";
import MenuIcon from "@material-ui/icons/Menu";

import GroupLogo from "../../public/GroupLogo.svg";
import Group404 from "../../public/Group404.svg";
import TwitterLogo from "../../public/Twitter.svg";
import DiscordLogo from "../../public/Discord.svg";
import theme from "../../themes/theme";
import { ThemeProvider } from "@material-ui/core/styles";

export default function Comp404() {
  const errorStyles = useStyles();

  type Anchor = "right";

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
    <ThemeProvider theme={theme}>
      <div className={errorStyles.container}>
        <Head>
          <title>404 page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={errorStyles.header}>
          <div className={errorStyles.groupLogo}>
            <Image src={GroupLogo} alt="Group Logo" />
          </div>
          <div>
            <div className={errorStyles.menuButton}>
              <Button
                onClick={toggleDrawer("right", true)}
                startIcon={<MenuIcon />}
                size="large"
                color="inherit"
              ></Button>
              <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </div>
            <div className={errorStyles.topButtons}>
              <Button className={errorStyles.pricing}>Pricing</Button>
              <Button className={errorStyles.blog}>Blog</Button>
              <Button className={errorStyles.dashboard}>Dashboard</Button>
            </div>
          </div>
        </div>
        <div className={errorStyles.middleContent}>
          <div className={errorStyles.group404}>
            <Image src={Group404} alt="Group 404" />
          </div>
          <div className={errorStyles.headerInfoDiv}>
            <Typography className={errorStyles.headerInfo}>
              Page not found
            </Typography>
          </div>
          <div className={errorStyles.descriptionInfoDiv}>
            <Typography className={errorStyles.descriptionInfo}>
              The page that you’re looking for is not found. Try going back to
              the homepage
            </Typography>
          </div>

          <Button
            className={errorStyles.homeButton}
            href="http://localhost:3000/"
          >
            Go to homepage
          </Button>
        </div>
        <div>
          <div className={errorStyles.footer}>
            <div className={errorStyles.copyrightDiv}>
              <Typography className={errorStyles.copyright}>
                Copyright 2020 © All rights Reserved
              </Typography>
            </div>
            <div className={errorStyles.footerRightPart}>
              <div className={errorStyles.bottomLinks}>
                <div className={errorStyles.privacyDiv}>
                  <Typography className={errorStyles.privacy}>
                    Privacy
                  </Typography>
                </div>

                <div className={errorStyles.termsConditionsDiv}>
                  <Typography className={errorStyles.termsConditions}>
                    Terms & Conditions
                  </Typography>
                </div>
                <div className={errorStyles.cookiePolicyDiv}>
                  <Typography className={errorStyles.cookiePolicy}>
                    Cookie policy
                  </Typography>
                </div>
              </div>
              <div className={errorStyles.socialIcons}>
                <div className={errorStyles.twitterLogo}>
                  <Image src={TwitterLogo} alt="Twitter logo" />
                </div>
                <div className={errorStyles.discordLogo}>
                  <Image src={DiscordLogo} alt="Discord logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
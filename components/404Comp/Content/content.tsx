import useStyles from "../styles";
import React from "react";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

export default function Page404Content() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.group404}>
        <Image
          width="500px"
          height="260px"
          src="/Group404.svg"
          alt="Group 404"
        />
      </div>
      <div className={classes.headerInfoDiv}>
        <Typography className={classes.headerInfo}>Page not found</Typography>
      </div>
      <div className={classes.descriptionInfoDiv}>
        <Typography className={classes.descriptionInfo}>
          The page that you’re looking for is not found. Try going back to the
          homepage
        </Typography>
      </div>

      <Link href="/">
        <a className={classes.homeButton}>Back to home</a>
      </Link>
    </div>
  );
}

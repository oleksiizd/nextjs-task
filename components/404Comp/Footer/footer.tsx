import useStyles from "../styles";
import { Typography } from "@material-ui/core";
import Image from "next/image";

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.copyrightDiv}>
        <Typography className={classes.copyright}>
          Copyright 2020 © All rights Reserved
        </Typography>
      </div>
      <div className={classes.footerRightPart}>
        <div className={classes.bottomLinks}>
          <div className={classes.privacyDiv}>
            <Typography className={classes.privacy}>Privacy</Typography>
          </div>

          <div className={classes.termsConditionsDiv}>
            <Typography className={classes.termsConditions}>
              Terms & Conditions
            </Typography>
          </div>
          <div className={classes.cookiePolicyDiv}>
            <Typography className={classes.cookiePolicy}>
              Cookie policy
            </Typography>
          </div>
        </div>
        <div className={classes.socialIcons}>
          <div className={classes.twitterLogo}>
            <Image
              width="32px"
              height="26px"
              src="/Twitter.svg"
              alt="Twitter logo"
            />
          </div>
          <div className={classes.discordLogo}>
            <Image
              width="23px"
              height="26px"
              src="/Discord.svg"
              alt="Discord logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

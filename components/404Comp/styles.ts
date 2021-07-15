import { makeStyles } from "@material-ui/styles";
import theme from "../../themes/theme";

const useStyles = makeStyles({
  container: {
    background: "#1D1F21",
    color: "white",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundImage: "url(/GroupString.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },

  header: { display: "flex", justifyContent: "space-between" },
  groupStrings: {},
  groupLogo: {
    margin: "23px 0px 23px 25px",
  },
  topButtons: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      width: 460,
      display: "flex",
      justifyContent: "space-between",
      margin: "31px 34px 0px 0px",
    },
  },

  menuButton: {
    margin: "23px 0px 23px 0px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  pricing: {
    width: 140,
    height: 42,
    background: "#1D1F21",
    borderRadius: 6,
    border: "1px solid #41454B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: 20,
    textTransform: "none",
  },
  blog: {
    width: 140,
    height: 42,
    background: "#1D1F21",
    borderRadius: 6,
    border: "1px solid #41454B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: 20,
    textTransform: "none",
  },
  dashboard: {
    width: 140,
    height: 42,
    background: "#1D1F21",
    borderRadius: 6,
    border: "1px solid #41454B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: 20,
    textTransform: "none",
  },

  middleContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
  },
  group404: {
    width: "80%",
  },
  headerInfoDiv: {
    margin: "0px 20px",
  },
  headerInfo: {
    fontFamily: "Barlow",
    fontWeight: 200,
    fontSize: 42,
  },
  descriptionInfoDiv: {
    margin: "20px 0px",
    maxWidth: 500,
  },
  descriptionInfo: {
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: 20,
  },

  homeButton: {
    width: 200,
    height: 52,
    background: "#1574F9",
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: 20,
    textTransform: "none",
    textDecoration: "none",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column-reverse",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
  },

  footerRightPart: {
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },

  copyrightDiv: {
    margin: "50px 42px 30px 42px",
    [theme.breakpoints.up("sm")]: {
      margin: "0px 0px 35px 32px",
    },
  },

  copyright: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
    textAlign: "center",
  },

  bottomLinks: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      width: 335,
      margin: "0px 28px 35px 28px",
    },
  },

  privacyDiv: { height: 21 },
  privacy: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
    textAlign: "center",
  },
  termsConditionsDiv: {
    height: 21,
    margin: "30px, 0px",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: { margin: "0px" },
  },
  termsConditions: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
    textAlign: "center",
  },
  cookiePolicyDiv: { height: "21px" },
  cookiePolicy: { fontFamily: "Roboto", fontWeight: 500, fontSize: "14px" },

  socialIcons: {
    display: "flex",
    justifyContent: "center",
    margin: "50px, 0px",
    [theme.breakpoints.up("sm")]: {
      margin: "0px 32px 35px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
    },
  },
  twitterLogo: {
    marginRight: 15,
    width: 32,
    height: 26,
  },
  discordLogo: {
    marginLeft: 15,
    width: 23,
    height: 26,
  },

  title: {
    fontSize: "3rem",
    textAlign: "center",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "1.5rem",
  },
});

export default useStyles;

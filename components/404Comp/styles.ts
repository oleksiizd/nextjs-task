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
    marginTop: "23px",
    marginBottom: "23px",
    marginLeft: "25px",
  },
  topButtons: {
    width: "460px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "31px",
    marginRight: "34px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  menuButton: {
    marginTop: "23px",
    marginBottom: "23px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  pricing: {
    width: "140px",
    height: "42px",
    background: "#1D1F21",
    borderRadius: "6px",
    border: "1px solid #41454B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "20px",
    textTransform: "none",
  },
  blog: {
    width: "140px",
    height: "42px",
    background: "#1D1F21",
    borderRadius: "6px",
    border: "1px solid #41454B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "20px",
    textTransform: "none",
  },
  dashboard: {
    width: "140px",
    height: "42px",
    background: "#1D1F21",
    borderRadius: "6px",
    border: "1px solid #41454B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "20px",
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
    margin: "15px",
  },
  headerInfoDiv: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  headerInfo: {
    fontFamily: "Barlow",
    fontWeight: 200,
    fontSize: "42px",
  },
  descriptionInfoDiv: {
    marginTop: "20px",
    marginBottom: "20px",
    maxWidth: "500px",
  },
  descriptionInfo: {
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "20px",
  },

  homeButton: {
    width: "200px",
    height: "52px",
    background: "#1574F9",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "20px",
    textTransform: "none",
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
    marginTop: "50px",
    marginBottom: "30px",
    marginLeft: "42px",
    marginRight: "42px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px",
      marginBottom: "35px",
      marginLeft: "32px",
      marginRight: "0px",
    },
  },

  copyright: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center",
  },

  bottomLinks: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "35px",
      width: "335px",
      marginLeft: "28px",
      marginRight: "28px",
    },
  },

  privacyDiv: { height: "21px" },
  privacy: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center",
  },
  termsConditionsDiv: {
    height: "21px",
    marginTop: "30px",
    marginBottom: "30px",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: { marginTop: "0px", marginBottom: "0px" },
  },
  termsConditions: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center",
  },
  cookiePolicyDiv: { height: "21px" },
  cookiePolicy: { fontFamily: "Roboto", fontWeight: 500, fontSize: "14px" },

  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    marginBottom: "50px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "35px",
      marginTop: "0px",
      marginRight: "32px",
      justifyContent: "center",
      alignItems: "flex-end",
    },
  },
  twitterLogo: {
    marginRight: "15px",
    width: "32px",
    height: "26px",
  },
  discordLogo: {
    marginLeft: "15px",
    width: "23px",
    height: "26px",
  },
});

export default useStyles;

import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const headerStyle = {
  boxGradient: {
    marginBottom: "20px",
    backgroundColor: "#df33ff",
    backgroundImage:
      "linear-gradient(90deg, #df33ff 0%, #ff41f2 24%, #ffd700 49%, #fff0a3 75%, #ffffff 100%)",
    height: "5px"
  },
  header: {
    boxShadow: " 1px 1px 4px 0 rgba(0, 0, 0, 0.1)"
  },
  headerContent: {
    display: "flex",
    alignItems: 'flex-end',
    paddingBottom: '12px'
  },
  headerLogo: {
    display: "flex",
    marginLeft: "32px",
    textDecoration: "none",
  },
  logoTitle: {
    color: "#da1781",
    fontSize: "20px",
    paddingLeft: "12px",
    fontFamily: "sans-serif",
    fontWeight: "200"
  },
  headerMenu: {
    display: "flex",
    marginLeft: "32px",
  },  
  headerMenuItem: {
    listStyleType: "none",
    marginRight: "42px",
    "&:last-child": {
      marginRight: "0"
    }
  },
  headerMenuLinck: {
    fontFamily: "sans-serif",
    fontSize: "17px",
    color: "#c7c7c7",
    textDecoration: "none"
  },
  headerLine: {
    height: "44px",
    width: "1px",
    backgroundColor: "#c7c7c7",
    margin: "0 38px"
  },
  headerBellBlock: {
    display: "flex"
  },
  bell: {
    color: "#c7c7c7",
    fontSize: "20px"
  },
  bellTitle: {  
    fontSize: "17px",
    fontWeight: "600",
    fontFamily: "sans-serif",
    paddingLeft: "15px",
    color: '#4a4a4a',
    paddingBottom: '9px',
  },
  bellAmazon: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "1px solid #dfe2e5",
    marginLeft: "4px"
  },
  amazonLogo: {
    fontSize: "26px",
    marginTop: "5px",
    marginLeft: "6px"
  }
};

export const { classes } = jss.createStyleSheet(headerStyle).attach();

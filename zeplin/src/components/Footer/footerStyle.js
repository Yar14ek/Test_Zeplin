import jss from "jss";
import preset from "jss-preset-default";
jss.setup(preset());

const footerStyle = {
  footer: {
    backgroundColor: "#f8f8f8"
  },
  footerLogo: {
    display: "flex",  
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  footerLogoImg: {
    marginTop: "40px",
    marginLeft: "80px"
  },
  cocialBox: {
    display: "flex",
    marginRight: "71px",
    paddingBottom: "10px"
  },
  cocialItem: {
    cursor: "pointer",
    fontSize: "25px",
    color: "#c6c6c6",
    margin: "0 3px"
  },
  footerLine: {
    margin: "10px auto",
    textAlign: "center",
    height: "2px",
    width: "880px",
    backgroundColor: "#e2e2e2"
  },
  copirite: {
    marginLeft: "80px",
    paddingBottom: "40px",
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: "600",
    color: "#9b9b9b"
  },
  support: {
    display: "flex"
  },
  footerSupport: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "72px",
    alignItems: "flex-start"
  },
  suportLink: {
    cursor: "pointer",
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: "600",
    color: "#9b9b9b",
    margin: "0 5px"
  }
};

export const { classes } = jss.createStyleSheet(footerStyle).attach();

import jss from "jss";
import preset from "jss-preset-default";
jss.setup(preset());

const sidebarAddLogoStyle = {
  addPick: {
    width: "122px",
    height: "122px",
    borderRadius: "50%",
    border: "solid 1px #dfe2e5",
    textAlign: "center",
    // marginTop: '65px',
    marginLeft: '83px',
    cursor: 'pointer',
    
},
addPickIcon: {
    marginTop: "30px",
    marginBottom: '5px',
},
  addPickText: {
    fontFamily: "sans-serif",
    fontSize: "17px",
    fontWeight: "600",
    color: "#9b9b9b"
  }
};

export const { classes } = jss.createStyleSheet(sidebarAddLogoStyle).attach();

import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const adaptivStyle = {
  container: {
    maxWidth: "800px",
    minWidth: "300px",
    margin: "0 auto",
    padding: "0 10px"
  },
  flexBox: {
    display: "flex",
    justifyContent: "space-between"
  },
  //header
  header: {
    textAlign: "center",
    marginTop: "16px"
  },
  headerTitle: {
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: "#4a4a4a",
    marginBottom: "14px"
  },
  headerOffer: {
    border: "1px dashed #da1781",
    "& p": {
      fontSize: "22px",
      fontWeight: "600",
      fontFamily: "sans-serif",
      color: "#da1781",
      padding: "6px 0"
    }
  },
  //main
  main: {
    marginTop: "36px",
    textAlign: "center"
  },
  sellDeskription: {
    fontSize: "15px",
    color: "#da1781",
    fontFamily: "sans-serif",
    padding: "0 23px"
  },
  sellTimer: {
    marginTop: "20px"
  },
  sellTimerTitl: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#4a4a4a",
    fontFamily: "sans-serif"
  },
  sellTimerNum: {
    fontSize: "40px",
    fontWeight: "600"
  },
  sellTimerText: {
    fontSize: "14px",
    fontFamily: "sans-serif",
    color: "#4a4a4a",
    padding: "6px"
  },
  img: {
    marginTop: "30px",
    width: "224px",
    height: "224px"
  },
  product: {
    textAlignLast: "left",
    marginTop: "23px"
  },
  nameProduct: {
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: "#4a4a4a"
  },
  nameProductId: {
    fontFamily: "sans-serif",
    color: "#0baff0"
  },
  filtr: {
    display: "flex",
    marginTop: "12px",
    marginBottom: "14px"
  },
  itemActiv: {
    cursor: "pointer",
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    color: "#da1781",
    padding: "0 25px 4px",
    borderBottom: "2px solid #da1781"
  },
  itemDisActiv: {
    cursor: "pointer",
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    color: "#c6c6c6",
    padding: "0 125px 2px 25px",
    borderBottom: "1px solid #c6c6c6"
  },
  smallText: {
    fontSize: "14px",
    fontFamily: "sans-serif",
    color: "#c6c6c6",
    padding: "6px"
  },
  oldPrice: {
    fontFamily: "sans-serif",
    textDecoration: "line-through",
    fontSize: "14px",
    color: "#4a4a4a"
  },
  dealPrice: {
    fontFamily: "sans-serif",
    fontSize: "18px",
    fontWeight: "600",
    color: "#da1781"
  },
  quantityTitle: {
    paddingLeft: "6px",
    marginTop: "16px",
    textAlignLeft: "left",
    fontFamily: "sans-serif",
    fontWeight: "600",
    fontSize: "14px",
    color: "#4a4a4a"
  },
  choiceBtn: {
    display: "flex"
  },
  choiceBtnItem: {
    margin: "6px",
    width: "35px",
    height: "35px",
    border: "1px solid #837c7ca6",
    "& p": {
      color: "#837c7ca6",
      paddingTop: "9px"
    }
  },
  sellBtn: {
    margin: "30px auto 15px",
    width: "276px",
    height: "44px",
    backgroundColor: "#da1781",
    "& p": {
      fontFamily: "sans-serif",
      fontSize: "20px",
      fontWeight: "600",
      color: "#ffffff",
      paddingTop: "10px"
    }
  },
  cansellBtn: {
    fontSize: "16px",
    fontFamily: "sans-serif",
    color: "#0baff0",
    marginBottom: "10px"
  },
  "@media (min-width: 436px)": {
    headerOffer: {
      width: "400px",
      "& p": {
        fontSize: "30px"
      }
    },
    sellDeskription: {
      fontSize: "18px",
      marginTop: "20px"
    }
  },
  "@media (min-width:800px)": {
    headerTitle: {
      fontSize: "20px",
      textAlign: "right"
    },
    timeContent: {
      display: "flex",
      justifyContent: "space-around"
    },
    sellTimer: {
      marginTop: "100px"
    },
    flexBox: {
      justifyContent: "space-around"
    },
    filtr: {
      justifyContent: "center"
    },
    itemDisActiv: {
      paddingRight: "70px"
    },
    itemActiv: {
      paddingLeft: "70px"
    },
    product: {
      marginLeft: "70px"
    },
    choiceBtn: {
      justifyContent: "center"
    },
    quantityTitle: {
      textAlign: "center"
    }
  }
};

export const { classes } = jss.createStyleSheet(adaptivStyle).attach();

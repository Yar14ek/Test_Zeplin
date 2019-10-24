import jss from "jss";
import preset from "jss-preset-default";
jss.setup(preset());

const contentStyle = {
  mainContent: {
    width: "62%"
  },
  line: {
    backgroundColor: "#acb0b036",
    width: "640px",
    height: "2px",
    marginBottom: "33px"
  },
  boldText: {
    color: "#4a4a4a",
    fontSize: "17px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    paddingBottom: "20px"
  },
  normalText: {
    color: "#9b9b9b",
    fontFamily: "sans-serif",
    paddingBottom: "26px",
    fontSize: "13px"
  },
  textAzur: {
    color: "#0baff0",
    fontWeight: "600"
  },

  flexBox: {
    display: "flex",
    justifyContent: "space-between"
  },
  label: {
    fontSize: "15px",
    fontFamily: "sans-serif"
  },
  checkBoxContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    position: "relative"
  },
  checkBox: {
    position: "absolute",
    right: "0",
    top: "-30px",
    "& input": {
      fontSize: "20px"
    }
  },
  checkboxBox: {
    marginTop: "5px",
    width: "96px",
    height: "36px",
    borderRadius: "3px",
    border: "1px solid #9b9b9b"
  },
  checkboxText: {
    color: "#4a4a4a",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "center",
    paddingTop: "7px"
  },
  //user
  user: {
    display: "flex",
    backgroundColor: "#fafafa",
    paddingTop: "30px",
    paddingBottom: "30px",
    marginTop: "20px",
    borderRadius: "5px",
    border: "1px solid #dfe2e5"
  },
  userPhoto: {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    marginLeft: "28px"
  },
  color1: {
    backgroundColor: "#f5a623"
  },
  color2: {
    backgroundColor: "#bd10e0"
  },
  userPhotoName: {
    fontSize: "20px",
    color: "#ffffff",
    fontFamily: "sans-serif",
    textAlign: "center",
    paddingTop: "13px"
  },
  userNameBlock: {
    paddingLeft: "17px",
    paddingTop: "5px"
  },
  userName: {
    color: "#4a4a4a",
    fontSize: "17px",
    fontWeight: "bold",
    fontFamily: "sans-serif"
  },
  userText: {
    paddingTop: "4px",
    color: "#9b9b9b",
    fontFamily: "sans-serif",
    fontSize: "13px"
  },
  userToolBar: {
    paddingLeft: "70px",
    marginTop: "-10px"
  },
  underLIne: {
    height: "30px"
  },
  userIsActivPoint: {
    width: "7px",
    height: "7px",
    backgroundColor: "#7ab55c",
    borderRadius: "50%"
  },
  userIsActivText: {
    fontSize: "10px",
    color: "#7ab55c",
    fontFamily: "sans-serif",
    paddingLeft: "3px"
  },
  userEditBtn: {
    fontSize: "12px",
    color: "#0baff0",
    paddingLeft: "13px",
    paddingRight: "7px",
    borderRight: "1px solid #0baff0"
  },
  userDeleteBtn: {
    paddingLeft: "7px",
    fontSize: "12px",
    color: "#0baff0"
  },
  userIsAdmin: {
    paddingTop: "15px",
    textAlign: "right",
    fontFamily: "sans-serif",
    fontSize: "17px",
    color: "#4a4a4a",
    fontWeight: "bold"
  },
  //billing
  billing: {
    marginBottom: "30px"
  },
  billingInfoText: {
    marginTop: "10px",
    fontWeight: "600",
    color: "#354052",
    fontFamily: "sans-serif"
  },
  billingInfotheСhoice: {
    backgroundColor: "#f2f4f7",
    border: "1px solid #ced0da",
    borderRadius: "5px"
  },
  billingInfoCategory: {
    padding: "9px 60px 9px 15px",
    fontFamily: "sans-serif",
    fontWeight: "600",
    color: "#354052"
  },
  billingInfoCategoryBtn: {
    cursor: "pointer",
    width: "26px",
    borderLeft: "1px solid #ced0da"
  },
  billingInfoIcon: {
    paddingLeft: "6px",
    paddingTop: "10px"
  },
  bilingDescription: {
    color: "#9b9b9b",
    fontFamily: "sans-serif",
    fontSize: "15px",
    marginTop: "30px"
  },
  bankAccTitl: {
    color: "#4a4a4a",
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "sans-serif",
    marginTop: "30px",
    marginBottom: "6px"
  },
  bankCart: {
    border: "1px solid #c6c6c6",
    borderRadius: "2px",
    alignItems: "center"
  },
  bankCartRec: {
    alignItems: "center"
  },
  bankName: {
    border: "solid 0.7px #e7e7e7",
    borderRadius: "1,5px",
    margin: "11px 0 11px 20px"
  },
  bankText: {
    fontSize: "10px",
    fontWeight: "600",
    color: "#c6c6c6",
    padding: "5px 4px"
  },
  bankNameText: {
    marginLeft: "13px",
    color: "#4a4a4a",
    fontFamily: "sans-serif"
  },
  bankAddNew: {
    color: "#0baff0",
    fontWeight: "600",
    fontFamily: "sans-serif",
    marginRight: "23px"
  },
  //extra
  accept: {
    justifyContent: "flex-end",
    marginTop: "30px",
    marginBottom: '30px',
  },
  btn: {
    width: "165px",
    height: "45px",
    borderRadius: "4px"
  },
  canselBox: {
    border: "1px solid #c6c6c6"
  },
  canselText: {
    textAlign: "center",
    marginTop: '12px',
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: "#c6c6c6"
  },
  saveBox: {
      marginLeft: '20px',
    border: "1px solid #db1c81",
    backgroundColor: "#db1c81"
  },
  saveText: {
    textAlign: "center",
    marginTop: '12px',
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: "#ffffff"
  },
  chekout:{
      marginBottom: '80px'
  }
};

export const { classes } = jss.createStyleSheet(contentStyle).attach();

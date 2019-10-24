import React from "react";
import { classes } from "./style";
function Adaptiv() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2 className={classes.headerTitle}>Thank you for your purchase!</h2>
        <div className={classes.headerOffer}>
          <p>SPECIAL OFFER</p>
        </div>
      </header>
      <main className={classes.main}>
        <p className={classes.sellDeskription}>
          As a thank you for shopping with us, get this additional item for only
          $15!
        </p>
        <div className={classes.timeContent}>
          <div className={classes.sellTimer}>
            <h2 className={classes.sellTimerTitl}>
              HURRY, YOUR OFFER ENDS IN:
            </h2>
            <h2 className={classes.sellTimerNum}>00:10:00</h2>
            <span className={classes.sellTimerText}>HOURS</span>
            <span className={classes.sellTimerText}>MINS</span>
            <span className={classes.sellTimerText}>SECS</span>
          </div>
          <img
            className={classes.img}
            src={require("./BuyINHzIgAMQsZX.jpg")}
            alt="strays"
          />
        </div>
        <div className={classes.product}>
          <p className={classes.nameProduct}>Your Super T-shirts</p>
          <p className={classes.nameProductId}>Your Super</p>
        </div>
        <div className={classes.buySection}>
          <div className={classes.filtr}>
            <p className={classes.itemActiv}>BUY</p>
            <p className={classes.itemDisActiv}>DETAILS</p>
          </div>
          <div className={classes.flexBox}>
            <p className={classes.sellTimerText}>Original price:</p>
            <p className={classes.oldPrice}>$ 29.99</p>
          </div>
          <div className={classes.flexBox}>
            <p className={classes.sellTimerText}>Deal price</p>
            <p className={classes.dealPrice}>$ 15.00</p>
          </div>
          <div className={classes.flexBox}>
            <p className={classes.smallText}>Shopping:</p>
            <p className={classes.smallText}>$ 2.00</p>
          </div>
          <div className={classes.flexBox}>
            <p className={classes.smallText}>Tax:</p>
            <p className={classes.smallText}>$ 1.00</p>
          </div>
          <div className={classes.flexBox}>
            <p className={classes.smallText}>Total:</p>
            <p className={classes.smallText}>$ 18.00</p>
          </div>
        </div>
        <div className={classes.quantity}>
          <p className={classes.quantityTitle}>Qty</p>
          <div className={classes.choiceBtn}>
            <div className={classes.choiceBtnItem}>
              <p>-</p>
            </div>
            <div className={classes.choiceBtnItem}>
              <p>1</p>
            </div>
            <div className={classes.choiceBtnItem}>
              <p>+</p>
            </div>
          </div>
        </div>
        <div className={classes.sellBtn}>
          <p>Byu</p>
        </div>
        <h3 className={classes.cansellBtn}>No, thanks, I’ll pass.</h3>
      </main>
    </div>
  );
}
export default Adaptiv;

import React from "react";


import { classes } from "./contentStyle";

function Content() {
  const line = () => {
    return <div className={classes.line}></div>;
  };
  return (
    <div className={classes.mainContent}>
      <div className={classes.accountSummary}>
        <h4 className={classes.boldText}>Account Summary</h4>
        <p className={classes.normalText}>
          Your account summary includes important information about your
          company's Klickly account, including terms, team members and billing
        </p>
        <div className={classes.flexBox}>
          <h4 className={classes.boldText}>Member Since</h4>
          <p className={classes.boldText}>Oct 18, 2019</p>
        </div>
        {line()}
      </div>
      <div className={classes.accountPrising}>
        <h4 className={classes.boldText}>Pricing</h4>
        <p className={classes.normalText}>
          Prices apply on both a campaign and account basis. A $0.50 minimum
          transaction amount applies.
        </p>
        <div className={classes.flexBox}>
          <h4 className={classes.boldText}>Campaign commission</h4>
          <p className={`${classes.normalText} ${classes.textAzur}`}>
            Varies by campaign
          </p>
        </div>
        {line()}
      </div>
      <div className={classes.checkBoxContainer}>
        <h4 className={classes.boldText}>Rest-of-site commission</h4>
        <div className={classes.checkBox}>
          <input type="checkbox" checked="checked" />
          <label className={classes.label}>Use default</label>
          <div className={classes.checkboxBox}>
            <p className={classes.checkboxText}>25%</p>
          </div>
        </div>
      </div>
      {line()}
      <div className={classes.checkBoxContainer}>
        <h4 className={classes.boldText}>New-customer commission</h4>
        <div className={classes.checkBox}>
          <input type="checkbox" checked="checked" />
          <label className={classes.label}>Use default</label>
          <div className={classes.checkboxBox}>
            <p className={classes.checkboxText}>{`$ 50`}</p>
          </div>
        </div>
      </div>
      {line()}
      <div className={classes.flexBox}>
        <h4 className={classes.boldText}>Boost</h4>
        <p className={`${classes.normalText} ${classes.textAzur}`}>
          Varies by campaign
        </p>
      </div>
      {line()}
      <div className={classes.flexBox}>
        <h4 className={classes.boldText}>Credit Card Rate</h4>
        <p className={classes.boldText}>2.9% + 30c</p>
      </div>
      {line()}
      <div className={classes.flexBox}>
        <h4 className={classes.boldText}>Team accounts (1 of 3)</h4>
        <p className={`${classes.normalText} ${classes.textAzur}`}>
          Add team member
        </p>
      </div>
      <div className={classes.user}>
        <div className={`${classes.userPhoto} ${classes.color2}`}>
          <p className={classes.userPhotoName}>JS</p>
        </div>
        <div className={classes.userNameBlock}>
          <h5 className={classes.userName}>Jimmy Santos</h5>
          <p className={classes.userText}>
            Last login was Tuesday, September 5, 2017, 5:32pm PDT
          </p>
        </div>
        <div className={classes.userToolBar}>
          <div className={classes.flexBox}>
            <div className={classes.userIsActivPoint}></div>
            <p className={classes.userIsActivText}>Active</p>
            <p className={classes.userEditBtn}>Edit</p>
            <p className={classes.userDeleteBtn}>Delete</p>
          </div>
          <p className={classes.userIsAdmin}>Admin</p>
        </div>
      </div>
      <div className={classes.user}>
        <div className={`${classes.userPhoto} ${classes.color1}`}>
          <p className={classes.userPhotoName}>CH</p>
        </div>
        <div className={classes.userNameBlock}>
          <h5 className={classes.userName}>Cooper Harris</h5>
          <p className={classes.userText}>
            Last login was Tuesday, September 5, 2017, 5:32pm PDT
          </p>
        </div>
        <div className={classes.userToolBar}>
          <div className={classes.flexBox}>
            <div className={classes.userIsActivPoint}></div>
            <p className={classes.userIsActivText}>Active</p>
            <p className={classes.userEditBtn}>Edit</p>
            <p className={classes.userDeleteBtn}>Delete</p>
          </div>
          <p className={classes.userIsAdmin}>Admin</p>
        </div>
      </div>
      <div className={classes.underLIne}></div>
      {line()}

      <div className={classes.billing}>
        <div className={classes.flexBox}>
          <p className={classes.billingInfoText}>Billing Information</p>
          <div className={`${classes.flexBox} ${classes.billingInfotheСhoice}`}>
            <p className={classes.billingInfoCategory}>Online Banking</p>
            <div className={classes.billingInfoCategoryBtn}>
              <i className={`fas fa-angle-down ${classes.billingInfoIcon}`}></i>
            </div>
          </div>
        </div>
        <p className={classes.bilingDescription}>
          Klickly fees will be charged to this payment method wherever possible.
        </p>
        <p className={classes.bankAccTitl}>Your bank account</p>
        <div className={`${classes.bankCart}  ${classes.flexBox}`}>
          <div className={`${classes.bankCartRec}  ${classes.flexBox}`}>
            <div className={classes.bankName}>
              <p className={classes.bankText}>BANK</p>
            </div>
            <p className={classes.bankNameText}>Citibank ending in 4567</p>
          </div>
          <p className={classes.bankAddNew}>Add new</p>
        </div>
      </div>
      {line()}
      {/* Extra */}
      <div>
        <h4 className={classes.boldText}>Extras</h4>
        <p className={classes.normalText}>
          Inform brands about channels where products will display / allow
          brands to select which channels to lead to
        </p>
        <div className={classes.flexBox}>
          <h4 className={classes.boldText}>Channels</h4>
          <p className={`${classes.normalText} ${classes.textAzur}`}>Widget</p>
        </div>
        <ul className={classes.flexBox}>
          <li>
            <input type="checkbox" />
            <label className={classes.label}>Social</label>
          </li>
          <li>
            <input type="checkbox" />
            <label className={classes.label}>Marketplace</label>
          </li>
          <li>
            <input type="checkbox" />
            <label className={classes.label}>Emails</label>
          </li>
          <li>
            <input type="checkbox" />
            <label className={classes.label}>Widget</label>
          </li>
        </ul>
        <div className={`${classes.accept} ${classes.flexBox}`}>
          <div className={`${classes.canselBox} ${classes.btn}`}>
            <p className={classes.canselText}>Cansel</p>
          </div>
          <div className={`${classes.saveBox} ${classes.btn}`}>
            <p className={classes.saveText}>Save</p>
          </div>
        </div>
      </div>
      {line()}

      <div className={classes.chekout}>
        <div className={classes.flexBox}>
          <h4 className={classes.boldText}>Chekout</h4>
          <p className={`${classes.normalText} ${classes.textAzur}`}>Klickly</p>
        </div>
        <div className={`${classes.accept} ${classes.flexBox}`}>
          <div className={`${classes.canselBox} ${classes.btn}`}>
            <p className={classes.canselText}>Cansel</p>
          </div>
          <div className={`${classes.saveBox} ${classes.btn}`}>
            <p className={classes.saveText}>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

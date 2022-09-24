import React from "react";
import "./SectionFive.css";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionFive = () => {
  return (
    <div className="section-five-wrapper" id="section-5">
      <h3 className="five">Other Points Settings:</h3>
      <form>
        <h5>Successful Illegal Move Declaration: - IMD-S:</h5>
        <label htmlFor="imds-encv">
          <input type="number" name="imds" id="imds" min="-10" step="1" max="10" placeholder="+5.0" />
        </label>
        <h5>Unsuccessful Illegal Move Declaration - IMD-U:</h5>
        <label>
          <input type="number" name="imdu" id="imdu" min="-10" step="1" max="10" placeholder="-5.0"/>
        </label>
        <h5>Checkmate Setting - #:</h5>
        <label>
          <input type="number" name="chkb" id="chkb" min="-10" step="1" max="10" placeholder="+10.0" />
        </label>
        <h5>Resign Penalty - <em>resigns</em></h5>
        <label>
          <input type="number" name="rsgn" id="rsgn" min="-10" step="1" max="10" placeholder="-10.0" />
        </label>
        <h5>Envoy's Extra Cash Value</h5>
        <label>
          <input type="number" name="encv" id="encv" min="1" step="1" max="9" placeholder="1.0" />
        </label>
        <h5>Can Points Errors Make Complete Turns Illegal? (IMD-)?</h5>
        <label className="form-control three-radio" htmlFor="pey-pen">Yes
            <input type="radio" name="pey-pen" value="yes" id="pey" />
        </label>
        <label className="form-control three-radio"htmlFor="pey-pen">No
            <input type="radio" name="pey-pen" value="no" id="pen" checked />
        </label>
      </form>
        <OfferButton />
        <SubmitButton />
    </div>
  )
}

export default SectionFive;
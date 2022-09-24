import React from "react";
import "./ValidationSection.css";
import SubmitButton from "../Buttons/SubmitButton";
import ReviewChangesButton from "../Buttons/ReviewChangesButton";
import ValidateTreatyButton from "../Buttons/ValidateTreatyButton";
const ValidationSection = () => {
  return (
    <div className="validation-section-wrapper">
        <form>
          <h3>Validate Your Treaty to Shake Things Up!</h3>
          <h4>Select the Treaty:</h4>
          <label className="form-control" htmlFor="firstTreaty">First Treaty
            <input type="radio" name="firstTreaty-revisedTreay" value="firstTreaty" id="firstTreaty" checked />
          </label>
          <label className="form-control" htmlFor="revisedTreaty">Revised Treaty
            <input type="radio" name="firstTreaty-revisedTreay" value="revisedTreaty" id="revisedTreaty" />
          </label>
          <ReviewChangesButton />
          <SubmitButton />
          <ValidateTreatyButton />
        </form>
    </div>
  )
}

export default ValidationSection;
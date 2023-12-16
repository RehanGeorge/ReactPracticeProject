import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment"

import InvestmentFormFields from "./InvestmentFormFields"

export default function InvestmentForm() {
    const [formDetails, setFormDetails] = useState({initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0})

    function formChangeHandler(target, value) {
        setFormDetails((prev) => {
            return {...prev, [target]: value}
        })
    }

    const investmentResults = calculateInvestmentResults(formDetails);
    console.log(investmentResults);
    
    return (
        <div id="user-input">
            <div className="input-group">
            <InvestmentFormFields label="Initial Investment" onInput={formChangeHandler}/>
            <InvestmentFormFields label="Annual Investment" onInput={formChangeHandler}/>
            </div>
            <div className="input-group">
            <InvestmentFormFields label="Expected Return" onInput={formChangeHandler}/>
            <InvestmentFormFields label="Duration" onInput={formChangeHandler}/>
            </div>
        </div>
    )
}
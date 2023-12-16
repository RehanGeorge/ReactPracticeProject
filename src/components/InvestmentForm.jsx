import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment"
import Result from "./Result"
import InvestmentFormFields from "./InvestmentFormFields"

export default function InvestmentForm() {
    const [formDetails, setFormDetails] = useState({initialInvestment: 1000, annualInvestment: 100, expectedReturn: 6, duration: 5})

    const inputIsValid = formDetails.duration >= 1;

    function formChangeHandler(target, value) {
        setFormDetails((prev) => {
            return {...prev, [target]: value}
        })
    }

    const investmentResults = calculateInvestmentResults(formDetails);
    
    return (
        <div>
            <section id="user-input">
                <div className="input-group">
                    <InvestmentFormFields label="Initial Investment" initialValue={formDetails.initialInvestment} onInput={formChangeHandler}/>
                    <InvestmentFormFields label="Annual Investment" initialValue={formDetails.annualInvestment} onInput={formChangeHandler}/>
                </div>
                <p></p>
                <div className="input-group">
                    <InvestmentFormFields label="Expected Return" initialValue={formDetails.expectedReturn} onInput={formChangeHandler}/>
                    <InvestmentFormFields label="Duration" initialValue={formDetails.expectedReturn} onInput={formChangeHandler}/>
                </div>
            </section>
            {!inputIsValid && <p className="center">Duration must be at least 1 year</p>}
            {inputIsValid && <Result onUpdate={investmentResults}/>}
        </div>
    )
}
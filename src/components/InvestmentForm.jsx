import InvestmentFormFields from "./InvestmentFormFields"

export default function InvestmentForm() {
    return (
        <div id="user-input">
            <div className="input-group">
            <InvestmentFormFields label="Initial Investment" />
            <InvestmentFormFields label="Annual Investment" />
            </div>
            <div className="input-group">
            <InvestmentFormFields label="Expected Return" />
            <InvestmentFormFields label="Duration" />
            </div>
        </div>
    )
}
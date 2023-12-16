export default function InvestmentFormFields({ label }) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="number" id={label} />
        </div>
    )
}
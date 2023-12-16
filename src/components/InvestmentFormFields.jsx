import { useState } from "react"

export default function InvestmentFormFields({ label, onInput }) {
    const [fieldValue, setFieldValue] = useState(0);

    function valueChangeHandler(event) {
        setFieldValue(event.target.value);
        const id = label.replace(/\s+/g, ' ').split(' ').map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
        onInput(id, event.target.value);
    }

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="number" id={label} value={fieldValue} onChange={valueChangeHandler}/>
        </div>
    )
}
import { formatter } from "../util/investment";

export default function Result({ onUpdate }) {
    const resultsData = [...onUpdate];

    let totalInterest = 0;

    for (let i = 0; i < resultsData.length; i++) {
        totalInterest += resultsData[i].interest;
        resultsData[i].totalInterest = totalInterest;
        resultsData[i].totalInvestedCapital = resultsData[i].valueEndOfYear - resultsData[i].totalInterest;
    }

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>Year {yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(yearData.totalInterest)}</td>
                        <td>{formatter.format(yearData.totalInvestedCapital)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
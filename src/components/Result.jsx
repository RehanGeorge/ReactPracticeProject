import TableRow from "./TableRow";

export default function Result() {
    return (
        <div className="center" id="result">
            <table>
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
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}
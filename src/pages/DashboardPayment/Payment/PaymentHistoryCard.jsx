

const PaymentHistoryCard = ({details,index}) => {
    
    const {
        price,
        date,
        email,
        status,
        transactionId,
        curseDetails
    }=details
    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
               {transactionId}
            </td>
            <td>
                {date}
            </td>
            <td>
                {curseDetails?.eventName}
            </td>
            <td>{price}</td>
            <td>
                {email}
            </td>
            <td>
                {status}
            </td>
         
        </tr>
    );
};

export default PaymentHistoryCard;
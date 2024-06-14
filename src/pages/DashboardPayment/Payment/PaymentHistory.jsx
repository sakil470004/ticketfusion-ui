import {  useEffect, useState } from 'react';

import PaymentHistoryCard from './PaymentHistoryCard';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
    const [details, setDetails] = useState([])
  
    const { user } =useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/paymentHistory/${user?.email}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [user?.email])
    // console.log(details)
    return (
        <div className="py-8 md:py-10 px-4 bg-cover bg-center">
        <div className="flex justify-between items-end">
          <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
            Payment
          </span>
        </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {details?.map((det, index) =>
                        <PaymentHistoryCard details={det} key={index} index={index}></PaymentHistoryCard>
                    )
                    }
                </tbody>
            </table>
            </div>
    );
};

export default PaymentHistory;
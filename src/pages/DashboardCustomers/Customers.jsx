import  { useEffect, useState } from "react";

function Customers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://ticketfusion-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="py-8 md:py-10 px-4 bg-cover bg-center">
      <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
        User List
      </span>



      <div className="overflow-x-auto mt-8">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Address/Phone</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {users?.map(usr=> <tr key={usr?._id}>
              <th >
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={usr?.img||"https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{usr?.name||"N/A"}</div>
               
                  </div>
                </div>
              </td>
              <td>
              <div className="text-sm opacity-50">{usr?.address||"N/A"}</div>
                <br />
                <span className="badge badge-ghost badge-sm">
                  {usr?.phone||"N/A"}
                </span>
              </td>
              <td>{usr?.email ||"N/A"}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>)}
          
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address/Phone</th>
              <th>ID</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Customers;

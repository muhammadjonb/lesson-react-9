// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "../app/user/userSlice";

// const Students = () => {
//   const { loading, users, error } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, []);

//   return (
//     <div>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>{error}</h1>}
//       {users.length > 0 && (
//         <div className="lines">
//           {users.map((user) => {
//             <div className="line" key={user.id}>
//               <h5>{user.id}</h5>
//               <p>{user.name}</p>
//               <p>{user.lastname}</p>
//               <p>{user.group}</p>
//             </div>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Students;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../app/user/userSlice";

const Posts = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.length > 0 && (
        <div className="lines">
          {users.map((user) => (
            <ul key={user.id}>
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.lastname}</li>
              <li>{user.group}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;

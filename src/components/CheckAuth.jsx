// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";

// const CheckAuth = ({ children }) => {
//   const [token, setToken] = useState();
//   const navigate = useNavigate();
//   useEffect(() => {
//     (async () => {
//       const localStorageToken = await localStorage.getItem("Token");
//       setToken(localStorageToken);
//       if (token === "undefined" || token === null) {
//         navigate('/')
//       }
//     })();
//   }, [token]);
//   return children;
// };
// export default CheckAuth;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const CheckAuth = ({ children }) => {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const localStorageToken = await localStorage.getItem("Token");
      setToken(localStorageToken);
      console.log(token, "tokjeee")
    //   if (token === "undefined" || token === null) {
    //     navigate('/');
    //   }
    })();
  }, [token, navigate]); // Added navigate to the dependency array
  return children;
};

export default CheckAuth;

import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../../context/auth/authContext"

const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext)

  const { isAuthenticated, loading } = authContext
  return !isAuthenticated && !loading ? <Navigate to='/login' /> : children
}

// Private Route rrd v5
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const authContext = useContext(AuthContext)

//   const { isAuthenticated, loading } = authContext
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !isAuthenticated && !loading ? (
//           <Navigate to='/login' />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   )
// }

export default PrivateRoute

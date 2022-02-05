import Login from '../components/login'

import { useMoralis } from 'react-moralis'

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  return (
   <div>
     {
       isAuthenticated ? (
         <p>
           you are logged
           <button onClick={logout}>Logout</button>
         </p>
       ): (
         <Login />
       )
     }
   </div>
  )
}

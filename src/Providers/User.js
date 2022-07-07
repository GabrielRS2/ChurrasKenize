import { createContext, useState, useEffect  } from 'react';  
import api from '../Services/index.js'
export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {

	const [user, setUser] = useState([]);

  useEffect(() => {
    api.get("/combos")
  .then(response=>{
    setUser(response.data)
  })
  },[])

  return (
    <UserContext.Provider
    value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

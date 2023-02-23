import React from 'react'
import axios from 'axios'

const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

export const HomeContext = React.createContext()

export const HomeContextProvider = ({children}) => {
  const [companyDetail, setCompany] = React.useState()
  const [isLogin, setLogin] = React.useState(false)
  const [admin, setAdmin] = React.useState(false)
  React.useEffect(() => {
    const checkIfAdmin = async() => {
      const res = await axios.get(`${url}/api/checkAdmin`,{
          headers: {
              Authorization: sessionStorage.getItem('user')
          }
      })
      if(res.data.status == true){
          setAdmin(true)
      }
    }
    const getData = async() => {
      try{
        if(sessionStorage.getItem('user')){
          const apiData = await axios.get(`${url}/api/companyDetails`, {
            params:{
              user: sessionStorage.getItem('user')
            },
            headers: {
              Authorization: sessionStorage.getItem('user')
            }
          })
          setCompany(apiData.data.companyData)
          setLogin(true)
        }
      }catch(error){
        console.log('Error 4: ', error)
      }
    }
    checkIfAdmin()
    getData()
  }, [])
  return (
    <HomeContext.Provider value={{
      companyDetail,
      isLogin,
      admin
    }}>
      {children}
    </HomeContext.Provider>
  )
}
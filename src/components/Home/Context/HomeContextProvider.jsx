import React from 'react'
import axios from 'axios'

const url = 'https://iiic-backend.herokuapp.com'

export const HomeContext = React.createContext()

export const HomeContextProvider = ({children}) => {
  const [companyDetail, setCompany] = React.useState()
  const [isLogin, setLogin] = React.useState(false)
  React.useEffect(() => {
    const getData = async() => {
      try{
        if(localStorage.getItem('user')){
          const apiData = await axios.get(`${url}/api/companyDetails`, {
              params:{
                user: localStorage.getItem('user')
              },
              headers: {
                Authorization: localStorage.getItem('user')
              }
          })
          setCompany(apiData.data.companyData)
          setLogin(true)
        }
      }catch(error){
        console.log('Error 4: ', error)
      }
    }
    getData()
  }, [])
  return (
    <HomeContext.Provider value={{
      companyDetail,
      isLogin
    }}>
      {children}
    </HomeContext.Provider>
  )
}
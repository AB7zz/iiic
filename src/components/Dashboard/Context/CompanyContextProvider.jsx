import React from 'react'
import axios from 'axios'

const url = 'https://iiic-backend.herokuapp.com'

export const CompanyContext = React.createContext()

export const CompanyContextProvider = ({children}) => {
  const [companyDetail, setCompany] = React.useState()
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
        }
      }catch(error){
        console.log('Error 4: ', error)
      }
    }
    getData()
  }, [])
  return (
    <CompanyContext.Provider value={{
      companyDetail
    }}>
      {children}
    </CompanyContext.Provider>
  )
}
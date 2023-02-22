import React from 'react'
import axios from 'axios'

const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

export const CompanyContext = React.createContext()

export const CompanyContextProvider = ({children}) => {
  const [companyDetail, setCompany] = React.useState()
  const [totalPosts, setTotal] = React.useState()
  const [totalVerified, setTotalVerified] = React.useState()
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
    const getTotal = async() => {
      try {
        const res = await axios.get(`${url}/api/totalInternPost`, {
          headers:{
            Authorization: localStorage.getItem('user')
          }
        })
        if(res.data.total){
          setTotal(res.data.total)
        }
        if(res.data.verified){
          setTotalVerified(res.data.verified)
        }
      } catch (error) {
        
      }
    }
    getData()
    getTotal()
  }, [])
  return (
    <CompanyContext.Provider value={{
      companyDetail,
      totalPosts,
      totalVerified
    }}>
      {children}
    </CompanyContext.Provider>
  )
}
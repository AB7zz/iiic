import React from 'react'
import axios from 'axios'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {initializeApp} from 'firebase/app'

//const url = 'http://iiic-backend.herokuapp.com'
const url = 'http://localhost:5000'

export const CompanyContext = React.createContext()

export const CompanyContextProvider = ({children}) => {
  const [companyDetail, setCompany] = React.useState(null)
  const [totalPosts, setTotal] = React.useState()
  const [totalVerified, setTotalVerified] = React.useState()
  const [edit, setEdit] = React.useState()
  const [logo, setLogo] = React.useState(null)
  React.useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBAVeMwDYCI2sQ6ODZ0Mt7V9TgmkEqAyJQ",
      authDomain: "iiic-4066e.firebaseapp.com",
      projectId: "iiic-4066e",
      storageBucket: "iiic-4066e.appspot.com",
      messagingSenderId: "804747626096",
      appId: "1:804747626096:web:80f0a28549dae31c23d6b5",
      measurementId: "G-7FY3B0EFDG"
    }
    
    initializeApp(firebaseConfig)
    
    const storage = getStorage()
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
          const imageListRef = ref(storage, `${apiData.data.companyData.email}/`)
          listAll(imageListRef).then((response) => {
            getDownloadURL(response.items[0]).then(url => {
              setLogo(url)
            })
          })
        }
      }catch(error){
        console.log('Error 4: ', error)
      }
    }
    const getTotal = async() => {
      try {
        const res = await axios.get(`${url}/api/totalInternPost`, {
          headers:{
            Authorization: sessionStorage.getItem('user')
          }
        })
        if(res.data.total){
          setTotal(res.data.total)
        }
        if(res.data.verified){
          setTotalVerified(res.data.verified)
        }
        if(res.data.edit){
          setEdit(res.data.edit)
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
      totalVerified,
      logo,
      edit
    }}>
      {children}
    </CompanyContext.Provider>
  )
}
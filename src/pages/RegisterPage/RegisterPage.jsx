import React from 'react'
import Register from '../../components/Register/Register';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

//const url = 'http://iiic-backend.herokuapp.com'
const url = 'http://localhost:5000'

const RegisterPage = () => {
  const navigate = useNavigate()
  React.useEffect(() => {
    const checkIfAdmin = async() =>{
      if(!sessionStorage.getItem('user')){
        window.location.replace('/iiic/')
      }
      const res = await axios.get(`${url}/api/checkAdmin`,{
          headers: {
              Authorization: sessionStorage.getItem('user')
          }
      })
      if(res.data.status != true){
          window.location.replace('/iiic/')
      }
    }
    checkIfAdmin()
  }, [])
  return (
    <Register/>
  )
}

export default RegisterPage
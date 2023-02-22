import React from 'react'
import Register from '../../components/Register/Register';

const RegisterPage = () => {
  React.useEffect(() => {
    const checkIfAdmin = async() =>{
      if(!sessionStorage.getItem('user')){
        window.location.replace('/')
      }
      const res = await axios.get(`${url}/api/checkAdmin`,{
          headers: {
              Authorization: sessionStorage.getItem('user')
          }
      })
      if(res.data.status != true){
          window.location.replace('/')
      }
    }
    checkIfAdmin()
  }, [])
  return (
    <Register/>
  )
}

export default RegisterPage
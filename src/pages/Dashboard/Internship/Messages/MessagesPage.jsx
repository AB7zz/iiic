import React from 'react'
import axios from 'axios'
import Messages from '../../../../components/Dashboard/Messages/Messages'


const url = 'http://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const MessagesPage = () => {
    React.useEffect(() =>{
        if(!sessionStorage.getItem('user')){
            window.location.replace('/iiic/login')
        }
        const checkIfAdmin = async() =>{
            const res = await axios.get(`${url}/api/checkAdmin`,{
                headers: {
                    Authorization: sessionStorage.getItem('user')
                }
            })
            if(res.data.status == true){
                window.location.replace('/iiic/admin')
            }
        }
        checkIfAdmin()
        }, [])
  return (
    <>
        <Messages/>
    </>
  )
}

export default MessagesPage
import React from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import axios from 'axios'
import Navbar from '../Upload/Navbar/Navbar'
import CircularProgress from '@mui/material/CircularProgress'


const url = 'http://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const Messages = () => {
  const [messages, setMessages] = React.useState()
  const [message, setMessage] = React.useState()
  const [sent, setSent] = React.useState(false)
  React.useEffect(() => {
    const getMessages = async() => {
      const res = await axios.get(`${url}/api/messages`, {
        headers:{
          Authorization: sessionStorage.getItem('user')
        }
      })
      if(res.data.status == true){
        setMessages(res.data.messages)
      }
    }
    getMessages()
  }, [])
  return (
    <div>
      <Navbar/>
      <div className='flex flex-cols p-5'>
          <div className='w-screen'>
            {messages && messages.reverse().map(mssg => {
              const handleMessage = async() => {
                if(!message){
                  alert('Write some message')
                  return
                }
                setSent(true)
                try {
                  const res = await axios.post(`${url}/api/sendMessage`, {
                    message,
                    email: mssg.split('$')[0]
                  },{
                    headers:{
                      Authorization: sessionStorage.getItem('user')
                    }
                  })

                  if(res.data.status == true){
                    alert('Message successfully sent')
                    setSent(false)
                  }
                } catch (error) {
                  console.log('Error 32: ', error)
                }
              }

              return(
                <div className="bg-[#ececec] p-5 mb-5">
                  <NotificationsActiveIcon className='mr-5'/><span className='font-semibold'>{mssg.split('$')[0]}</span>: {mssg.split('$')[1]}
                  <div className='flex'>
                    <input onChange={e => setMessage(e.target.value)} type="text" className='rounded p-3 mt-5 mr-4' placeholder='Enter your reply...' />
                    {sent ? <button onClick={handleMessage} className='bg-blue-500 hover:bg-blue-300 text-white rounded px-4'><CircularProgress className='inherit'/></button> : <button onClick={handleMessage} className='bg-blue-500 hover:bg-blue-300 text-white rounded px-4'>Send</button>}
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default Messages
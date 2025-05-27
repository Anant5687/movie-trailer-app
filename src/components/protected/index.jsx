import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { CookieNames } from '../../utils/constants';

const Protected = ({Component}) => {
    const navigate = useNavigate()
    const [cookies] = useCookies(CookieNames)

    useEffect(()=>{
      if(!cookies.token){
        navigate('/login')
      }
    }, [cookies.token, navigate])
   
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected
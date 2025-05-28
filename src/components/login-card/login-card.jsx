import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import Input from '../input/input';
import Button from '../button';

import { CookieNames, LoginFields } from '../../utils/constants';


import './style.css';

const LoginCard = () => {
  const [_, setCookie] = useCookies(CookieNames);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    password: '',
  });

  const onChange = (i, e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const onSubmitHandeler = () => {
    if (values?.name?.trim() === '' || values?.password?.trim() === '') {
      return;
    }
    setCookie('token', values?.password, { path: '/' });
    navigate('/', { replace: true });
  };

  return (
    <div className="card-container">
      <div className="card">
        {LoginFields.map((ele, i) => (
          <Input
            key={i}
            placeholder={ele.placeholder}
            value={values?.ele?.id}
            type={ele.type}
            ind={i}
            id={ele.id}
            onChange={onChange}
          />
        ))}
        <Button btntext={'Sign In'} onClick={onSubmitHandeler} />
      </div>
    </div>
  );
};

export default LoginCard;

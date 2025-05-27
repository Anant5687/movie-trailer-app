import React, { useState } from 'react';
import Input from '../input/input';

import './style.css';
import Button from '../button';
import { LoginFields } from '../../utils/constants';

const LoginCard = () => {

  const [values, setValues] = useState({
    name: 'ma,e',
    password: 'pass' 
  })

  const onChange = (i, e) => {
    
    LoginFields[i].value += e.target.value;
    console.log(LoginFields[i]);
  };

  return (
    <div className="card-container">
      <div className="card">
        {LoginFields.map((ele, i) => (
          <Input
            key={i}
            placeholder={ele.placeholder}
            value={ele.value}
            type={ele.type}
            ind={i}
            id={ele.id}
            onChange={onChange}
          />
        ))}
        <Button btntext={'Sign In'} />
      </div>
    </div>
  );
};

export default LoginCard;

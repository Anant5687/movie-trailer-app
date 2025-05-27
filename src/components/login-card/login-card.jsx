import React, { useState } from 'react';
import Input from '../input/input';

import './style.css';
import Button from '../button';
import { LoginFields } from '../../utils/constants';

const LoginCard = () => {
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

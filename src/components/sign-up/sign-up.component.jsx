import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = newUser;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setNewUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  const { displayName, email, password, confirmPassword } = newUser;
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an Account</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          handleChange={handleChange}
          value={displayName}
          label='Display Name'
          required></FormInput>
        <FormInput
          type='email'
          name='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required></FormInput>
        <FormInput
          type='password'
          name='password'
          handleChange={handleChange}
          value={password}
          label='Password'
          required></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          handleChange={handleChange}
          value={confirmPassword}
          label='Confirm Password'
          required></FormInput>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;

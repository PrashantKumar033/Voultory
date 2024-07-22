// src/components/Signup.jsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f4f8;
  position: relative;
  background-image: url('./background1.jpg');
  background-size:cover;
`;

const SignupBox = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 350px;
  text-align: center;
  position: relative;
  z-index: 1;
  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: #0073e6;
  position: absolute;
  top: 0;
  height: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
`;

const Icon = styled.div`
  font-size: 24px;
  color: white;
  padding-left:25px;
`;

const HeaderButtons = styled.div`
  display: flex;
  padding-right:30px;
  height:35px;
  gap: 20px;
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: #0073e6;
  }
`;

const Title = styled.h1`
  margin-top: 25px; /* Offset for the header */
  margin-bottom: 25px;
  color: #0073e6;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0073e6;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #005bb5;
  }
`;

const Signup = () => {
  const [value, setValue] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Details:', value);
  };

  return (
    <Container>
      <Header>
        <Icon>
          <FontAwesomeIcon icon={faUser} />
        </Icon>
        <HeaderButtons>
          <HeaderButton>
            <FontAwesomeIcon icon={faSignInAlt} />
            Login
          </HeaderButton>
          <HeaderButton>
            <FontAwesomeIcon icon={faUserPlus} />
            Sign Up
          </HeaderButton>
        </HeaderButtons>
      </Header>
      <SignupBox>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={value.name}
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            value={value.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            value={value.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </SignupBox>
    </Container>
  );
};

export default Signup;

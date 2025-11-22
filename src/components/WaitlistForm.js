import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, Spacing, BorderRadius, Typography } from '../constants/theme';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
  background: rgba(255,255,255,0.15);
  padding: 0.5em 1em;
  border-radius: 2em;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin-top: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 0.75em 1.25em;
  border: none;
  border-radius: 2em;
  font-size: 1rem;
  outline: none;
  min-width: 220px;
  background: #fff;
  color: ${Colors.primary};
  box-shadow: 0 1px 6px rgba(34,158,217,0.08);
`;

const Button = styled.button`
  padding: 0.75em 2em;
  border: none;
  border-radius: 2em;
  background: linear-gradient(90deg, #229ED9 0%, #37b8f4 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
  box-shadow: 0 4px 16px rgba(34, 158, 217, 0.15);
  &:hover, &:focus {
    background: linear-gradient(90deg, #37b8f4 0%, #229ED9 100%);
    box-shadow: 0 6px 24px rgba(34, 158, 217, 0.25);
    transform: translateY(-2px) scale(1.03);
  }
`;

const SuccessMsg = styled.div`
  color: #fff;
  background: linear-gradient(90deg, #229ED9 0%, #37b8f4 100%);
  border-radius: 2em;
  padding: 0.75em 2em;
  margin-top: 1em;
  font-weight: 500;
  text-align: center;
`;

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setEmail('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email to join the waitlist"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Join Waitlist</Button>
      </Form>
      {error && <SuccessMsg style={{background: '#e74c3c', backgroundImage: 'none'}}>{error}</SuccessMsg>}
      {submitted && <SuccessMsg>Thank you for joining the waitlist!</SuccessMsg>}
    </>
  );
};

export default WaitlistForm;

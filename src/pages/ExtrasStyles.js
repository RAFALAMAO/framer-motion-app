import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  height: 100vh;
  /* padding-top: 1%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const H1 = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  font-family: 'Amatic SC', cursive;
`

export const Button = styled.button`
  border: none;
  color: black;
  background-color: white;
  display: block;
  font-size: 20px;
  width: 300px;
  margin: 20px 0 20px 0;
  padding: 10px;
  cursor: pointer;
`
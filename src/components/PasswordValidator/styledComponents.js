// Style your elements here

import styled from 'styled-components'

export const DivCont = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PassCont = styled.div`
  box-shadow: 1px 5px 3px 5px #434451;
  border-radius: 10px;
  height: 300px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 30px;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
`
export const Input = styled.input`
  color: #383a4e;
  width: 250px;
  height: 35px;
  background-color: #edeeff;
  outline: none;
  border-width: 0px;
  padding-left: 8px;
  margin-top: 25px;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
`

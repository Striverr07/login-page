import styled from "styled-components";

export const Form = styled.form`
  width: 600px;
  height: 550px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
 
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  padding: 40px 0px;

 
  @media only screen and (max-width: 1115px) {
    width: 100%;
    text-align:left;

  }
`
export const Wrapper= styled.div`
  width: 85%;
  
  display: flex;
  flex-direction: column;
  
`
export const Terms = styled.p`
span {
    color: #FF7979;
    text-align:right;
    cursor: pointer;
  }
  font-size: 11px; 
  
  color: #BAB7D4;
  text-align: left;
  line-height: 26px;
  margin-top: 5px;

  
  


  @media only screen and (max-width: 460px) {
    margin-top: 10px;
    text-align: left;
    line-height: 15px;
  }
`
export const Btn = styled.button`
    width: 100%; 
    height: 56px;
    background-color: #1575A7;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.27px;
    line-height: 26px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 0px #1575A7;
    cursor: pointer;
`


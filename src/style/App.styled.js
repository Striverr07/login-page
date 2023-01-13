import styled from "styled-components"
import bgImg from '../images/bg-intro-desktop.png'

export const Container = styled.div`
  width: 100vw; 
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: 100px 100px;
  display: flex;
  padding: 20px;
  background-size: 300px 360px;
 

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`
export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  @media only screen and (max-width: 460px) {
    padding: 10px;
    
  }
`


export const ContentWrapper = styled.div`
  width: 525px;
  color: #fff;

  h1 {
    font-weight: bold;
    font-size: 50px;
    letter-spacing: -0.52px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
  }

  @media only screen and (max-width: 768px) {
    h1 {
    letter-spacing: -0.29px;
    text-align: center;
    padding: 0 12px;
    margin-bottom: 20px;
    }

    p {
      text-align: center;
    }
  }


  
  @media only screen and (max-width: 460px) {
    h1 {
    font-size: 28px;
    letter-spacing: -0.29px;
    text-align: center;
    padding: 0 12px;
    margin-bottom: 20px;
    }

    p {
      text-align: center;
    }
  }
`




import React, { useState } from 'react'
import { Form, Wrapper, Terms, Btn } from '../style/Form.styled'

import InputField from './InputField'
import { inputData } from '../data'


const FormBox = () => {
    const [formData, setFormData] = useState({
       
        email: '',
        password: ''
    })

   
    const submitHandler = (e) => {
        e.preventDefault()
        alert('Login Sucessfully')
    }

   
    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    return (
        <Form onSubmit={submitHandler}>
        <h1>Login</h1>
           
            {inputData.map(input => {
                return <InputField key={input.id} {...input} value={formData[input.name]} onChange={changeHandler}/>            
            })}
            <Wrapper>
                 <Terms ><input type="checkbox" />  Remember me <br/>
                 
                 <input type="checkbox"   />  Agree to <span style={{textDecoration:'underline'}}>Terms and Services<br/></span>
                 </Terms>
               
                <Btn>
                
           Login
        </Btn>
            
        <Terms style={{fontWeight: 'bold',textAlign:'center'}}> Don't have an account? <span style={{fontWeight: 'bold',textDecoration:'underline'}}>Register Here</span>
                 </Terms>
            </Wrapper>
            
        </Form>
    )
}

export default FormBox
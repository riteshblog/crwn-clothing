import React from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss'; 

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email :'',
            password:'',
            connfirmPassword:''
        }
    }

    handleSubmit=async ( event )=>{
        event.preventDefault();
        const {displayName,email,password,connfirmPassword}=this.state;
        if(password !==connfirmPassword){
            alert("Password dont match")
            return;
        }

        try{
            const {user}=await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email :'',
                password:'',
                connfirmPassword:''
        })
        }catch(error){
            console.error(error);
        }
    }

    handleChange=(event)=>{
        const {name, value}=event.target;
        this.setState({[name]:value})
    }

    render(){
        const {displayName, email, password, connfirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have a account</h2>
                <span> Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />                   
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    /> 
                    <FormInput
                        type='password'
                        name='connfirmPassword'
                        value={connfirmPassword}
                        onChange={this.handleChange}
                        label='Connfirm Password'
                        required
                    /> 
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                     </form>
            </div>            
        )
    }
}
export default SignUp;
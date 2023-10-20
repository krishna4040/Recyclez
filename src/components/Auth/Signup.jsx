import React, { useState } from 'react'
import { BtnWrapper } from './BtnWrapper'
import { InputWrapper } from './Inputwrapper'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSignupData } from '../../store/slice/userSlice'
import toast from 'react-hot-toast'

const Signup = ({setSignupstatus}) => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSumbit = async (event) => {
        if (password !== confirmPassword) {
            toast.error('password and confirm password do not match');
            return;
        }
        event.preventDefault();
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}signup`,{
            userName,
            email,
            contact,
            password,
        });
        toast.success('signed up suucessfully');
        setSignupstatus(prev => !prev);
    }

    return (
        <form className='flex flex-col items-center justify-center' onSubmit={handleSumbit}>
            {InputWrapper("username", "text", userName, setUserName)}
            {InputWrapper("email", "email", email, setEmail)}
            {InputWrapper("phone num", "number", contact , setContact)}
            {InputWrapper("secret", "password", password, setPassword)}
            {InputWrapper("confirm secret", "password", confirmPassword, setConfirmPassword)}
            {BtnWrapper("signup")}
        </form>
    )
}

export default Signup
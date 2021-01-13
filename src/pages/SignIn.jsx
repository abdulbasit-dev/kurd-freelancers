import React from 'react'
import Button from '../components/Button'
import FacebookLogo from "./../assets/img/facebook.svg"
import GoogleLogo from "./../assets/img/google.svg"
import LinkedInLogo from "./../assets/img/linkedin.svg"
import GithubLogo from "./../assets/img/github.svg"
import Input from "./../components/Input"

const SignIn = () => {
    return (
        <div className="authantiction flex border px-0 container mt-12 flex-col md:flex-row justify-center items-center ">
            <div className="flex bg-lightblue w-full md:w-5/12 flex-col items-center pt-5  border px-12 text-white">
                <h1 className="text-3xl">What are you</h1>
                <h1 className="text-3xl">waiting for?</h1>
                <p className="text-center mt-12">
                    Register now to get your dream job or best freelancing to make what you want!     
                </p>
                <Button text="Sign up"/>

            </div>
            <div className="flex flex-col items-center w-full md:w-7/12 text-lightblue ">
                <h1 className="text-4xl mt-2">Log in</h1>
                <div className="border w-72 my-4"></div>
                <div className="flex justify-around items-center w-72 ">
                    <img src={FacebookLogo} alt="Facebook logo" className=" w-14 h-14 cursor-pointer" />
                    <img src={GoogleLogo} alt="Google logo" className=" w-14 h-14 cursor-pointer" />
                    <img src={LinkedInLogo} alt="Linkedin logo" className=" w-14 h-14 cursor-pointer" />    
                    <img src={GithubLogo} alt="Github logo"className=" w-14 h-14 cursor-pointer" />
                </div>
                <div className="flex w-72 mb-4">
                    <div className="border w-32 my-4"></div>
                    <h1 className="mx-3">Or</h1>
                    <div className="border w-32 my-4"></div>
                </div>
                <form action="" className="flex flex-col w-72 border">
                    <Input type="password"/>
                </form>
            </div>
        </div>
    )
}

export default SignIn

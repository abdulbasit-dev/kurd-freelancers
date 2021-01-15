import React from 'react'
import Button from '../components/Button'
import FacebookLogo from "./../assets/img/facebook.svg"
import GoogleLogo from "./../assets/img/google.svg"
import LinkedInLogo from "./../assets/img/linkedin.svg"
import GithubLogo from "./../assets/img/github.svg"
import TextField from '@material-ui/core/TextField';

const SignIn = () => {
    return (
        <div className="flex h-screen w-full justify-center items-center -mt-24">
            <div className="authantiction relative min-h-100 flex px-0 container  flex-col border md:flex-row justify-center items-center ">
                <div className="flex absolute left-0 bg-lightblue w-full min-h-full md:w-5/12 flex-col pt-5 px-12 text-white">
                    <h1 className="text-3xl text-center">What are you</h1>
                    <h1 className="text-3xl text-center ">waiting for?</h1>
                    <p className="text-center mt-12">
                        Register now to get your dream job or best freelancing to make what you want!     
                    </p>
                    <Button text="Sign up"/>

                </div>
                <div className="flex flex-col items-center w-full md:w-7/12 right-0 text-lightblue border-2 h-full absolute ">
                    <h1 className="text-4xl mt-2">Log in</h1>
                    <div className="border w-96 my-4"></div>
                    <div className="flex justify-around items-center w-96 ">
                        <img src={FacebookLogo} alt="Facebook logo" className=" w-14 h-14 cursor-pointer" />
                        <img src={GoogleLogo} alt="Google logo" className=" w-14 h-14 cursor-pointer" />
                        <img src={LinkedInLogo} alt="Linkedin logo" className=" w-14 h-14 cursor-pointer" />    
                        <img src={GithubLogo} alt="Github logo"className=" w-14 h-14 cursor-pointer" />
                    </div>
                    <div className="flex w-96 mb-4 justify-between">
                        <div className="border w-44 my-4"></div>
                        <h1 className="mx-3">Or</h1>
                        <div className="border w-44 my-4"></div>
                    </div>
                    <form action="" className="flex flex-col w-96">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            color="primary"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            autoComplete="password"
                            type="password"
                        />
                        <div className="flex items-center">
                            <input type="checkbox" name="keep-me-loged-in" className="mr-3 w-4 h-4"/>
                            <label htmlFor="keep-me-loged-in">
                                Keep me loged in
                            </label>
                            
                        </div>
                        <div className="flex justify-end">
                            <button className="border-lightblue border rounded px-2 w-20 h-10 ">
                                    Log in
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
    )
}

export default SignIn

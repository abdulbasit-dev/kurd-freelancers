import React from 'react'
import FacebookLogo from "./../assets/img/facebook.svg"
import GoogleLogo from "./../assets/img/google.svg"
import LinkedInLogo from "./../assets/img/linkedin.svg"
import GithubLogo from "./../assets/img/github.svg"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Singnup = () => {
  return (
      <>
            <div className="flex w-full justify-center items-center border-lightblue tablet:mt-40 mt-10 mb-10 sm:px-20 tablet:px-0">
                <div className="flex flex-col lg:flex-row tablet:w-3/5 shadow-2xl w-full ">
                    <div className="flex lg:w-5/12 border bg-lightblue flex-col p-10 items-center text-white justify-center ">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center mb-6">Welcome Back</h1>
                        <p className="text-center mx-9">
                          To keep connected with us please log in your personal info
                        </p>
                        <div className="mt-16">
                          <Button variant="outlined" >
                            Log in
                          </Button>
                        </div>
            </div>    
                    </div>
                    <div className="flex lg:w-7/12 items-center flex-col text-lightblue px-5 lg:px-0">
                      <h1 className="text-3xl mt-3">Sign Up</h1>
                      <div className="border w-96 my-4"></div>
                        <div className="flex flex-col tablet:flex-row justify-around items-center w-96 flex-wrap">
                        <div className='flex w-1/2 justify-around mt-5 tablet:mt-0'>
                            <img src={FacebookLogo} alt="Facebook logo" className=" w-14 h-14 cursor-pointer" />
                            <img src={GoogleLogo} alt="Google logo" className=" w-14 h-14 cursor-pointer" />
                        </div>
                        <div className='flex w-1/2 justify-around mt-5 tablet:mt-0'>
                            <img src={LinkedInLogo} alt="Linkedin logo" className=" w-14 h-14 cursor-pointer" />    
                            <img src={GithubLogo} alt="Github logo"className=" w-14 h-14 cursor-pointer" />
                        </div>
                    </div>
                         <div className="flex w-96 mb-4 tablet:justify-between justify-center mt-6">
                        <div className="border w-44 hidden sm:block my-4"></div>
                        <h1 className="mx-3 tablet:block justify-self-center self-center ">Or</h1>
                        <div className="border w-44 my-4 hidden sm:block"></div>
                    </div>
            <form action="" className="flex flex-col w-96 max-w-full ">
               <div className="w-full tablet:w-96">
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    name="fullname"
                    autoFocus
                    color="primary"
                  />
              </div>
               <div className="w-full tablet:w-96">
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
              </div>
               <div className="w-full tablet:w-96">
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
              </div>
              <div className="w-full tablet:w-96">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="confirmpassword"
                            label="Confirm Password"
                            name="confirmpassword"
                            type="password"
                />
              </div>
                        <div className="flex mt-8 mb-10">
                            <Button variant="outlined" color="primary">
                                Sign up
                            </Button>
                        </div>
                      </form>
                      </div>
                     
                </div>
      </div>
      </>
    )
}

export default Singnup

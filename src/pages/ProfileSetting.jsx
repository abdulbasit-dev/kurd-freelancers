import React from 'react'

const ProfileSetting = () => {
    const data = {
        name: "jone",
        image: "https://i.pinimg.com/originals/44/69/c7/4469c769cb0d648dedccabe24d6fab8e.jpg",
        projects: [
            {
                name: "Project Name",
                des:
                    " Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam",
            },
            {
                name: "Project Name",
                des:
                    " Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam",
            },
            {
                name: "Project Name",
                des:
                    " Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam",
            },
        ],
        
    }
    return (
        <div className="h-screen flex flex-col w-10/12 border-2 mx-auto items-center">
           <div className="relative w-full h-1/5">

<img  className="absolute w-full h-full " src="https://i.pinimg.com/originals/c1/5c/ba/c15cbae66a8a930a1cb292aaf60bb815.jpg" alt="cover"/>
<button className="absolute z-20 right-0 mr-8 mt-3 border-2 border-white text-white rounded-md px-4 py-2" >change Cover</button>


            
            </div>
            <div className="border-2 w-9/12 h-3/4 flex -my-10 z-10 bg-white flex-col xl:flex-row">
                <div className = "w-2/5 border flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="rounded-full w-52 h-52 border flex justify-center items-center ">
                                <img src={data.image} alt="profileimage" className="w-full h-full rounded-full" />
                                
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className = "w-3/5 border flex flex-col">

                </div>
            </div>
        </div>
    )
}

export default ProfileSetting

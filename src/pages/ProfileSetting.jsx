import React from 'react'

const ProfileSetting = () => {
    const data = {
        name: "jone",
        image: "",
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
        <div className="h-screen flex items-center flex-col w-10/12 border-2 mx-auto">
             <div className="border w-full h-1/5 bg-black">

            </div>
            <div className="border-2 w-9/12 h-3/4 flex -m-10 z-10 bg-white flex-col xl:flex-row">
                <div className = "w-1/4 border flex flex-col">

                </div>
                <div className = "w-3/4 border flex flex-col">

                </div>
            </div>
        </div>
    )
}

export default ProfileSetting

import React from 'react'
import Avatar from '@mui/material/Avatar';

function UserData({userData}) {
    return (
        <>
            <div className='flex items-center gap-2 overflow-x-hidden w-full'>
                <Avatar  sx={{ bgcolor: 'red', width: "30px", height: "30px", fontSize: "17px", textAlign: "center" }} />
                <p className='font-bold font-mono'>User</p>
            </div>
            <div className='py-1 pl-10 w-full mb-2'>
                <p className='text-wrap text-start font-mono'>{userData}</p>
            </div>
        </>
    )
}

export default UserData

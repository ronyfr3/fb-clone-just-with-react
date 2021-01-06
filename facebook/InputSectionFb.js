import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {RiLiveFill} from 'react-icons/ri'
import {BiVideoPlus} from 'react-icons/bi'
import {MdPhotoLibrary} from 'react-icons/md'
import './InputSection.css'


const InputSectionFb = () => {
    return (

        <div className='inputwrapper'> 
            <div className='inputSection'>
                <span className='profilelogo'><AccountCircleOutlinedIcon/></span>
                <input type='text' placeholder='Whats on your mind?'/>
            </div>
            <div className='inputunderline'></div>
            <div className='videoSection'>
                   <span className='livephotoroom'><RiLiveFill/></span>
                   <p>Live</p>
                   <span className='line'>|</span>
                   <span className='livephotoroom1'><MdPhotoLibrary/></span>
                   <p>Photo</p>
                   <span className='line'>|</span>
                   <span className='livephotoroom2'><BiVideoPlus/></span>
                    <p>Room</p>
            </div>
            <div className='videounderline'></div>
        </div>
    )
}

export default InputSectionFb

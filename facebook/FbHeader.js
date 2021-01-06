import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import { FaBars } from 'react-icons/fa'
import {FaFacebookMessenger} from 'react-icons/fa'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './FbHeader.css'

const FbHeader = () => {

    return (
            
            <div className='header_wrapper'>
            <div className='fbIcon'>
                <h3 className='fb'>facebook</h3>
               <div className='messeage'>
                    <span className='searchicon'><SearchOutlinedIcon/></span>
                    <span><FaFacebookMessenger/></span>
               </div>

            </div>
            <div className='header_spans'>
                <span><HomeIcon/></span>
                <span><OndemandVideoIcon/></span>
                <span><StorefrontIcon/></span>
                <span><ViewQuiltOutlinedIcon/></span>
                <span><NotificationsOutlinedIcon/></span>
                <main><FaBars/></main>
            </div>
            <div className='header_underline'></div>
        </div>
    ) 
}

export default FbHeader

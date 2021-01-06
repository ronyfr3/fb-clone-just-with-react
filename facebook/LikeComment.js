import React, { useState } from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {FaRegCommentAlt} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'
import './LikeComment.css'
const LikeComment = () => {
    const [colors,setColors] =useState(false)
    const likeCLick = () =>{
        setColors(!colors)
    }
    return (
        <>
        <div className='likewrapperunderline'></div>
        <div className='likewrapper'>
            <div className='comwrapper'>
                <span className={colors ? 'redlike' : 'like'} onClick={likeCLick}><AiOutlineLike/></span>
                <p onClick={likeCLick}>Like</p>
            </div>
            <div className='comwrapper'>
                <span onClick={()=>alert('Please Sign In First')}><FaRegCommentAlt/></span>
                <p onClick={()=>alert('Please Sign In First')}>Comment</p>
            </div>
            <div className='comwrapper'>
                <span onClick={()=>alert('Please Sign In First')}><RiShareForwardLine/></span>
                <p onClick={()=>alert('You can not share this')}>Share</p>
            </div>

        </div>
        <div className='likewrapperunderlineone'></div>
         <footer className='likefooter'> @ Created By Abdur Rakib Rony</footer>
        </>
    )
}

export default LikeComment

import React from 'react'
import FbHeader from './FbHeader'
import InputSectionFb from './InputSectionFb'
import Carousel from './Carousel'
import Post from './Post'
import LikeComment from './LikeComment'

const Facebook = () => {
    return (
        <div>
            <FbHeader/>
            <InputSectionFb/>
            <Carousel/>
            <Post/>
            <LikeComment/>
        </div>
    )
}

export default Facebook

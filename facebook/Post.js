import React from 'react'
import {BsFillPeopleFill} from 'react-icons/bs'
import './Post.css'
const Post = () => {

    return (
        <div>
            <div>
                <div className='postwrapper'>
                    <div className='imgpost'>
                       <img src='https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/83136846_285267049329522_5271262383522128592_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFVARUOemo5MQe7dRFXy5x6hrf088XBebKGt_TzxcF5ss2jAgJw8iGOPygiw9e58m15le8n5BUlu7rmvlfOH0Tt&_nc_ohc=jGiONj8SiTUAX-l6xEf&_nc_ht=scontent.fdac4-1.fna&oh=7294a1490ba7cb6ec64bb7c2d087a8f2&oe=6019635D' alt=''/>
                    </div>
                    <div className='postpeople'>
                        <p className='rony'>Abdur Rakib Rony</p>
                        <div className='timepeople'>
                            <p className='time'>19h. </p>
                            <span className='twopeople'><BsFillPeopleFill/></span>
                        </div>
                        </div>
                </div>
                <div className='pimg'>
                    <p>Can i build facebook and instagram clone at the same page???
                        Lets try it with React in my next basic project-03
                    </p>
                  <div className='pong'>
                     <img src='https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/135255936_434023984453827_6834702370293346480_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFZ-2aJ_kYGhiyh-Sno5MJmAPT4VUSK4tQA9PhVRIri1PstdCDVCYyKqVZQGOvrTKz4ucI914vA-4AF1yMZwRKK&_nc_ohc=wUfZNrcsV7kAX9dR3F7&_nc_ht=scontent.fdac4-1.fna&oh=eae049ea9746c4af677e73d2434cbbfc&oe=601C3CC2' alt=''/>
                  </div>
                </div>

            </div>
        
        </div>
    )
}

export default Post

import React from 'react'
import Ratings from '../ratings/Ratings'
import "./UserCard.css"




const UserCard = (props) => {



    return (
        <div
            className="boxLinkedin" style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}`,  }}
        >

            <div className='containerText'>
                <h1 className='name'>{props.name}</h1>
                <Ratings
                    rating={props.rating}
                />
                <h5 className='gender'>{props.gender}</h5>
                <h3 className='job'>{props.job}</h3>
                <h3 className='city'>{props.city}</h3>
            </div>

        </div>

    )
}


export default UserCard
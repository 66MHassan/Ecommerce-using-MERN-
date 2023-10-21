import React from 'react';
import { AiFillStar,AiOutlineStar } from "react-icons/ai"
import { BsStarHalf } from "react-icons/bs"

const Star = ({stars,reviews}) => {
    const ratingStar=Array.from({length:5},(elem,index)=>{
        let number=index+0.5;
        return(
            <span key={index}>
                {
                    stars>=index+1 ?
                    <AiFillStar className='text-warning'/>:
                    stars>=number ? 
                    <AiOutlineStar className='text-warning'/>:
                    <BsStarHalf className='text-warning'/>
                     }

            </span>
        )
    })
  return (
    <>
    <div>{ratingStar} {reviews}: Customer Reviews</div>
    
    
    </>
  )
}

export default Star;
import React from 'react'

const Card = (props) => {
    return (
        <div className='w-[340px] h-[200px] flex rounded-[30px] p-[20px] border border-none'
        style={{backgroundColor: props.bg}}>
            <p className='text-[18px] font-[800] text-white my-[10px]'>{props.description}</p>
            <img src={props.img} alt="" className='' />
        </div>
    )
}

export default Card

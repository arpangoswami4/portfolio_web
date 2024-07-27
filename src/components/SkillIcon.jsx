import React from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";


const SkillIcon = ({iconItem}) => {
  return (
    <div className='flex flex-col items-center w-[105px] h-[88px]'>
      <Icon icon={iconItem[0]} className="w-16 h-16 text-red-600"></Icon>
      <p className='text-black'>{iconItem[1]}</p>
    </div>
  )
}

export default SkillIcon
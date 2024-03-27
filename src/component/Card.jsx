import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

export default function Card({ data, reference }) {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='flex shrink-0 relative w-60 h-60 bg- rounded-[45px] bg-zinc-900/90 text-white px-5 py-5 overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm  leading-tight mt-5 font-semibold'>{data.desc}</p>
                <div className='footer absolute bottom-0 w-full left-0'>
                    <div className=' px-8 mb-2 py-3 flex items-center justify-between'>
                        <h5>{data.filesize}</h5>
                        <span className='w-5 h-5 rounded-full flex item-center justify-center'>
                            {data.isClose ? <IoIosCloseCircleOutline /> :
                                <LuDownload />}
                        </span>
                    </div>
                    {
                        data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor=="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                        </div>)
                    }

                </div>
            </motion.div>
        </> 
    )
}

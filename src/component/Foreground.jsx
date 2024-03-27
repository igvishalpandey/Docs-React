import React, { useRef, useState } from 'react'
import Card from './Card'


export default function Foreground() {

    const ref= useRef(null)

    const data = [{
        desc: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
        filesize: "0.9 MB",
        isClose: false,
        tag: {
            isOpen: true,
            tagttile: "Download Now",
            tagColor: "green"
        }
    }, {
        desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of",
        filesize: "5.1 MB",
        isClose: false,
        tag: {
            isOpen: false,
            tagttile: "Download Now",
            tagColor: "green"
        }
    },{
        desc: "The European languages are members of the same family. Their separate existence is a myth",
        filesize: "0.9 MB",
        isClose: false,
        tag: {
            isOpen: true,
            tagttile: "Download Now",
            tagColor: "blue"
        }
    },{
        desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and",
        filesize: "9.2 MB",
        isClose: false,
        tag: {
            isOpen: false,
            tagttile: "Download Now",
            tagColor: "green"
        }
    },{
        desc: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax",
        filesize: "2.9 MB",
        isClose: true,
        tag: {
            isOpen: true,
            tagtitle: "Upload",
            tagColor: "blue"
        }
    }];

    return (

        <div ref={ref} className='p-5 fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>
            {data.map((item, index) =>(
                <Card data={item}  reference={ref}/>
            ))}
        </div>

    );
}


import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const Dialog = ({ open, setOpen, className, child }) => {
    return (
        <div class={`fixed inset-0 items-center  justify-center z-50 backdrop-brightness-50 confirm-dialog ${open ? "flex" : "hidden"} `}>
            <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                <div class=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
                <div class={`bg-white rounded-lg  md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg ${className}`}>
                    <div className="w-full flex justify-end"><RxCross2 onClick={() => setOpen(false)} className='cursor-pointer' /></div>

                    {child}
                </div>
            </div>
        </div>
    )
}

export default Dialog
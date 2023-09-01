import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import Button from '../Button/Button'

const Note = (props) => {
    const { title, content, id } = props

    const handleDelete = () => {
        props.onDelete(id)
    }
    return (
        <div className='p-4 container mx-auto'>
            <div className='relative shadow-md rounded-lg p-5'>
                <h1
                    className='uppercase font-semibold text-2xl text-gray-500 mb-2 border-b pb-2'>
                    {title}
                </h1>
                <p className='text-gray-400'>
                    {content}
                </p>
                <Button
                    onclick={handleDelete}
                    classname='absolute p-2 bg-yellow-400 rounded-full text-slate-50 right-5 hover:bg-red-500 hover:shadow-md'
                >
                    <BsTrashFill />
                </Button>
            </div>
        </div>
    )
}

export default Note
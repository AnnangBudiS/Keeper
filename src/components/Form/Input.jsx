import React, {useState} from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import Button from '../Button/Button'


const InputForm = (props) => {
    const [ note, setNote ] = useState({
        title: "",
        content:""
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) =>{
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        })
        event.preventDefault();
    }

  return (
    <div className='p-10 container mx-auto'>
        <form className='flex flex-col justify-center p-5 shadow-xl rounded-lg'>
            <input 
            name='title'
            onChange={handleChange}
            value={note.title}
            placeholder='Title' 
            className='mb-4 outline-none'/>
            <textarea 
            name="content"
            onChange={handleChange}
            value={note.content} 
            placeholder='Take a note...' 
            rows="3" 
            className='outline-none'/>
        </form>
        <div className='flex justify-end'>
            <Button 
            onclick={handleSubmit} 
            classname='bg-yellow-400 p-4 rounded-full text-slate-50 mt-4 hover:shadow-md'
            >
                <BsFillPlusSquareFill />
            </Button>
        </div>
        
    </div>
  )
}

export default InputForm
import React from 'react'

export default function Form(props){


   const inputTextHandler = (e) =>{
    props.setInputText(e.target.value);
   }

   const submitHandler = (e) =>{
        e.preventDefault()
       
        props.setTodos([
            ...props.todos,
          {text: props.inputText,
          completed:false,
          id:Math.random()*10000}
        ])
        props.setInputText('')
   }

   const statusHandler =(e)=>
   {
    props.setStatus(
        e.target.value
    )
   }

    return(
        <form>
            <div className='formbar '>
                
                <input  onChange={inputTextHandler} type="text"  value={props.inputText}/>
                <button onClick={submitHandler} type="submit" className='formbtn'><i className="fa-solid fa-plus "></i></button>
                <div className='select'>
                    <select onChange={statusHandler} >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>
    )
}
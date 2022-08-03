import React, { useState } from 'react';
import '../styles/todoList.css';
import Items from '../components/Items.js';

function TodoList() {

    const [listItems, setListItems] = useState("");
    const [items, setItems] = useState([]); // an empty array to store the items

    const showItem = (event)=>
    {
           setListItems(event.target.value);
    }
       //adding items to array
    const addItem = ()=>
    {
        setItems((oldItems)=>{
            return [...oldItems, listItems]
        });

        setListItems("");

    }
     //deleting the items from the array using filter method
    const removeItem = (id)=>{

        setItems((oldItems)=>
        {
            return oldItems.filter((item, index)=>{
                return index !== id;
            });
        });

    };


   

  return (
        <div className='main-container'>
            <h1>Todo List</h1>
            <div className='todo-input-list'>
                <input type="text" placeholder="What to do" className='listitem' onChange={showItem} value={listItems} />
                <button className='btn-add' onClick={addItem}>Add</button>
            </div>
            <div className='todo-list'>
                <ol>
                 
                    {
                        items.map((item, index)=>
                        {
                            return <Items item={item} key={index} id={index} onSelect = {removeItem} />
                        })
                    }
                </ol>
            </div>
        </div>

  )
}

export default TodoList
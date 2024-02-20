import './style/todo.css';
import { useState } from 'react';

const DUMMY_DATA = [
    {id: 1, priority: 'A',date: '12-Dec-2024', endDate: '14-Dec-2024', list: 'MATH', desc:'Study for Maths test', status:1 },
    {id: 2, priority: 'B',date: '12-Dec-2024', endDate: '14-Dec-2024', list: 'Cricket Match', desc:'Practice for the tournament', status:1 },
    {id: 3, priority: 'B',date: '12-Dec-2024', endDate: '14-Dec-2024', list: 'Gym', desc:'Legs Day', status:1}
];

export const Todo = () => {

    const [data, setData] = useState(DUMMY_DATA);

    const addHandler = () => {
        const newData = {id: 3, priority: 'B',date: '12-Dec-2024', endDate: '14-Dec-2024', list: 'Gym', desc:'Legs Day', status:1}
        setData([...data, newData]);
    }

    const todoEditHandler = () => {
        console.log("EDIT BUTTON CLICKED");
    }
    const todoDeleteHandler = (id) => {
        const newData = data.filter((item) => (item.id !== id));
        setData(newData);
    }

    return(
        <div className="tood-list">
            <span onClick={addHandler}>+ ADD</span>
            <ul>
                {data.map((item) => (
                <ul className="todo-list__style" key={item.id}>
                    <li className='todo-list__priority'>
                    <span>{item.priority}</span>
                    </li>
                    <li className='todo-list__detail'>
                        <span className="todo-list__value">{item.list}</span>
                        <span className="todo-list_desc">{item.desc}</span>
                    </li>
                    <li className='todo-list__action'>
                        <span onClick={todoEditHandler}><i>Edit</i></span>
                        <span onClick={() => todoDeleteHandler(item.id)}><i>Del</i></span>
                    </li>
                </ul>))
                }
            </ul>
        </div>
    );
}
import React from 'react';


const Select = ({ clickButtonOne, clickButtonTwo, clickButtonThree }) => {
    return <div className="mode">
        <button onClick={clickButtonOne}>Обычный</button>
        <button onClick={clickButtonTwo}>Инженерн</button>
        <button onClick={clickButtonThree}>Программист</button>
    </div>
}

export default Select;
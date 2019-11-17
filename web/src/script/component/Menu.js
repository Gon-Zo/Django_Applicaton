import React  , {useState} from 'react'

const Info = () => {
    return 'Test'
};

const getMenu = () => {

    let test2 = Info();

    return (
        <div>
            <a href={'/Main'}>Main</a>
            <a href={'/USer'}>User</a>
            <a>{test2}</a>
        </div>
    )
};

export default getMenu


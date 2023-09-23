import React from 'react'
import { login } from '../api/firebase_log';

const Head = () => {
    return (
        <div className="flex w-screen flex-row justify-between">
            Head
            <div className="flex">
                <span>add</span>
                <span onClick={login}>login</span>
            </div>
        </div>
    )
}


export default Head;
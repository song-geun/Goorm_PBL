import React, { useRef } from 'react'
import { login } from '../api/firebase_log';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../api/store';
import Modal, { switching } from '../api/modal';
import AddMemo from './AddMemo';
import Main from './Main';
const Head = () => {
    const onoff: boolean = useSelector((state: RootState) => state.modal.onoff);
    const email: string = useSelector((state: RootState) => state.user.email);
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state : RootState) => state.fetch.isloading)

    return (
        <div className="w-screen">
            <div className="flex w-100 flex-row justify-between">
                <span></span>
                <div className="flex-col">
                    {

                        (!loading && email === "" && <span onClick={login}>login</span>)

                    }

                    {
                        (email !== "") && <span onClick={() => dispatch(switching(!onoff))}>add</span>
                    }



                </div>
            </div>
            <div>
                <Main />
            </div>
            {
                (onoff && <AddMemo />)
            }
        </div>

    )
}


export default Head;
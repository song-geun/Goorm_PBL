import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../api/store';
import { memo1 } from '../api/fetchDB';




const Main = () => {
    const Memos1: any = useSelector((state: RootState) => state.fetch.memos);
    const tags = useSelector((state: RootState) =>
        state.user.tags);
    const Note = Memos1.filter((data: any) => data.tag === tags);
    const priority_h = Note.filter((data: any) => data.priority === true);
    const priority_l = Note.filter((data: any) => data.priority === false);
    return (
        <div className='items-center'>
            {
                priority_h.map((data: any) => {
                    return (
                        <div key={data.id} >
                            <div>
                                {data.memotitle}
                            </div>
                            <div>
                                {data.context}
                            </div>
                        </div>
                    )
                })
            }
            {
                priority_l.map((data: any) => {
                    return (
                        <div key={data.id} >
                            <div>
                                {data.memotitle}
                            </div>
                            <div>
                                {data.context}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;
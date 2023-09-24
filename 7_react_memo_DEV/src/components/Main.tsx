import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../api/store';
import { memo1 } from '../api/fetchDB';




const Main = () => {
    const Memos1: any = useSelector((state: RootState) => state.fetch.memos);
    const tags = useSelector((state: RootState) =>
        state.user.tags);
    const issort: any = useSelector((state: RootState) => state.user.datesort);
    const prioritysort: any = useSelector((state: RootState) => state.user.priority);
    let Note: any;
    if (tags === "default")
        Note = Memos1;
    else
        Note = Memos1.filter((date: any) => date.tag === tags);
    const priority_h: any = Note.filter((data: any) => data.priority === prioritysort);
    const priority_l: any = Note.filter((data: any) => data.priority === !prioritysort);
    if (issort) {
        priority_h.sort();
        priority_l.sort();
    }
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
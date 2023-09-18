import { GetServerSideProps, NextPage } from "next";
import instance from "../api/axios";
import requests from "../api/listrequests";


export async function getServerSideProps(){
    const request = await instance.get(requests.fetchProduct);
    const data = await request.json();
    return {
        props: {data}
    }
}

export default function Category({data}: any)
{
    console.log(data);
    return (
        <div>
            {
                data.map((data: any) => (
                    <div key={data.id}>
                        <img src={data.image} />
                        <span>{data.title}</span>
                        <span>{data.price}</span>
                    </div>
                ))
            }
        </div>
    );
};





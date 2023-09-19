



export default function Category({data}: any)
{
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





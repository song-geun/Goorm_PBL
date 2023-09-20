

let cnt: number = 0
const Category: any = ((data: any) => {
    return (
        <div className="flex flex-col px-5 w-20% h-72 justify-center border border-gray-500" key={data.data.id} >
            <div className="flex flex-col justify-center m-5">
                <img className="flex w-48 h-48 object-fill" src={data.data.image} />
                <p className="flex truncate">{data.data.title}</p>
            </div>
            <div className="flex flex-row justify-between">
                <button>장바구니 담기</button>
                <p className="turncate">$  {data.data.price}</p>
            </div>
        </div>
    )
}
);




export default Category;

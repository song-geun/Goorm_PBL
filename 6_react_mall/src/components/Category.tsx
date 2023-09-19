


let cnt: number = 0
const Category: any = ((data: any) => {
    return (
        <div key={data.id} >
            <div className="flex w-30">
                <img src={data.data.image} className = "w-20"/>
                <span>{data.data.title}</span>
                <span>{data.data.price}</span>
            </div>
        </div>
    )
}
);




export default Category;

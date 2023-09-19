



const Category : any = ((data: any) => {
    return (
        <div className="flex w-20 bg-slate-700">
                <img src={data.data.image} />
                <span>{data.data.title}</span>
                <span>{data.data.price}</span>
        </div>
    )
}
);




export default Category;

const menu: any = ((e: object) => {
    return (
        <div>
            <div >

                <div className="w-screen flex justify-center px-4 py-4 mr-2 text-3xl">Products</div>
                <div className=" flex justify-center">
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md">
                        모두
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md">
                        전자기기
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md">
                        쥬얼리
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md">
                        남성의류
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md">
                        여성의류
                    </div>
                </div>
            </div>
        </div >
    )
}
);

export default menu;
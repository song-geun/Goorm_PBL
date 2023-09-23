import { useNavigate } from "react-router-dom";

const Nav: any = ((e: object) => {
    let navigate = useNavigate();   
    return (
        <div className="flex-row w-screen">
            <div className="flex w-screen justify-between">
                <span onClick={()=>{navigate('/')}}>일단 로고</span>

                <div className="flex justify-end">
                    <span onClick={()=> {navigate('../Carts')}}>장바</span>
                    <span>구니</span>
                    <span onClick={()=> {navigate('../Login')}}>EX</span>
                </div>
            </div>
        </div>
    )
}
);

export default Nav;
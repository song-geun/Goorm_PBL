import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Nav: any = ((e: object) => {
    let navigate = useNavigate();   
    return (
        <div className="flex-row w-screen">
            <div className="flex w-screen justify-between">
                <span className="text-2xl font-semibold text-blue-500"onClick={()=>{navigate('/')}}>Shop</span>

                <div className="flex justify-end">
                    <FontAwesomeIcon onClick={()=> {navigate('../Carts')}} className="py-1 text-2xl font-semibold text-blue-500" icon={faCartShopping} />
                    <FontAwesomeIcon onClick={()=> {navigate('../Login')}} className="py-1 text-2xl font-semibold" icon={faRightToBracket} />
                </div>
            </div>
        </div>
    )
}
);

export default Nav;
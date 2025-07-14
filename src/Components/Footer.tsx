
import { Provider, useDispatch } from "react-redux";
import { setUser } from "../app/user.slice";

export function Footer(){
    const dispatch = useDispatch()
    return(<>
        <div className="footer">Footer</div>
        <button onClick={()=>{dispatch(setUser("some string"))}}>Click</button></>
    )
}
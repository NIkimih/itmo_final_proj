import { Route, Routes } from "react-router-dom";
import { InfoCompany } from "./InfoCompany";
import { InfoWorker } from "./InfoWorker";
import { Shop } from "./Shop/Shop";
import { Customer } from "./Customer";
import { Documents } from "./Documets";
import { Contact } from "./Contact";
import Login from "./Authorization/Login";
import Reset from "./Authorization/Reset";
import Profile from "./Authorization/Profile";
import NewProfile from "./Authorization/NewProfile";
import Cart from "./Cart/Cart";



export function Main(){

    return(
        <div className="main-window">
            <Routes>
                <Route path="/" element={<InfoCompany/>} />
                <Route path="InfoCompany" element={<InfoCompany/>} />
                <Route path="InfoWorker" element={<InfoWorker/>} />
                <Route path="Shop" element={<Shop/>} />
                <Route path="Customer" element={<Customer/>} />
                <Route path="Documents" element={<Documents/>} />
                <Route path="Contact" element={<Contact/>} />
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/NewProfile" element={<NewProfile />}></Route>
                <Route path="/Reset" element={<Reset />}></Route>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>
            </Routes>
        </div>
    )
}
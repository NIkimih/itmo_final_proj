import Userfront, { LoginForm } from "@userfront/toolkit/react";
import { Link } from "react-router-dom";

Userfront.init("9ny7pd6n");

export default function Login() {
  return(
    <>
    <div>
        <LoginForm />
        <Link to="/Reset" className="">
            <button>
              Сброс
            </button>
          </Link>
    </div>
    
    </>
  );
}
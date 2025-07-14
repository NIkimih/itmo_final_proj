import { Link } from "react-router-dom";

import Userfront from "@userfront/toolkit";

export function Authorization() {
  if (Userfront.user.email == null) {
    return (
      <>
        <div>
          <Link to="/NewProfile" className="">
            <button>Регистрация</button>
          </Link>
          <Link to="/Login" className="">
            <button>Войти</button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Link to="/Profile" className="">
            <button>Профиль</button>
          </Link>
          <Link to="/Cart" className="">
            <button>Корзина</button>
          </Link>
        </div>
      </>
    );
  }
}

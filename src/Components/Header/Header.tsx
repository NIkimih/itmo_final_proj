import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Authorization } from "../Authorization/Authorization";

const but_style = "header-buttons"

export function Header() {
  return (
    <>
      <div className="header gap-30">
        <Link to="/InfoCompany">
          <Logo />
        </Link>
        <div className="button-main">
          <Link to="/InfoWorker" className={but_style}>
            <button>
              Работники
            </button>
          </Link>
          <Link to="/Shop" className={but_style}>
            <button>
              Магазин
            </button>
          </Link>
          <Link to="/Customer" className={but_style}>
            <button>
              Заказчики
            </button>
          </Link>
          <Link to="/Documents" className={but_style}>
            <button>
              Документы
            </button>
          </Link>
          <Link to="/Contact" className={but_style}>
            <button>
              Контакты
            </button>
          </Link>
          <Link to="/Contact" className={but_style}>
            <button>
              Партнеры
            </button>
          </Link>
          <Authorization />
        </div>
      </div>
    </>
  );
}

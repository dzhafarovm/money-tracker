import { NavLink } from 'react-router-dom';
import routes from "routes/routes"

const IncomePage = () => {
    return (
          <>
          <h2>IncomePage</h2>
          <nav >
            <NavLink to={routes.expenses}  >
            Расходы
            </NavLink>
            <br/>
             <NavLink to={routes.report}>
            Отчёт
             </NavLink>
             </nav>
        </>
    )
}

export default IncomePage;
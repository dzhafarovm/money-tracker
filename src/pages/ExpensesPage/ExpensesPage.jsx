import { NavLink } from 'react-router-dom';
import routes from "routes/routes"

const ExpensesPage = () => {
    return (
        <>
            <h2>ExpensesPage</h2>
              <nav >
            <NavLink to={routes.income}  >
            Доходы
            </NavLink>
            <br/>
             <NavLink to={routes.report}>
            Отчёт
             </NavLink>
             </nav>
        </>
    )
}

export default ExpensesPage;
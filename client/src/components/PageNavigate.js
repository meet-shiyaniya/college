import { NavLink } from "react-router-dom"

function PageNavigate({ title }) {
    return (
        <main className="py-5">
            <NavLink to="/" className="text-blue-400 mr-1 text-xl my-6">Home</NavLink>/{title}
        </main>
    )
}
export default PageNavigate

import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <nav className="p-4 bg-blue-500 text-white">
                <ul className="flex justify-around">
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="active">
                        <Link to="/read">Read</Link>
                    </li>

                    <li className="active">
                        <Link to="/update">Update</Link>
                    </li>

                    <li className="active">
                        <Link to="/delete">Delete</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

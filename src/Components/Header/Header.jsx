import { SearchBar } from "../SearchBar";

import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

import { AuthContext } from "../../contexts/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./header.css";

export function Header() {
	const { isLoggedIn, logout } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/Login");
	};
	return (
		<header className="header-container">
			<SearchBar />
			<nav className="header-navigation">
				<Link
					to="/"
					className="link"
				>
					<HomeIcon />
					Home
				</Link>

				{isLoggedIn ? (
					<Link
						to="/"
						className="link"
						onClick={handleLogout}
					>
						<LogoutIcon />
					</Link>
				) : (
					<>
						<Link
							to="/Login"
							className="link"
						>
							Login
						</Link>
						<Link
							to="/register"
							className="link"
						>
							Register
						</Link>
					</>
				)}
			</nav>
		</header>
	);
}

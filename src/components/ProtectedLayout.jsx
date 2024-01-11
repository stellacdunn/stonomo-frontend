import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedLayout = () => {
	const { user, logout } = useAuth();

	if (!user) {
		return <Navigate to="/" />;
	}

	return (
		<div>
			<nav>
				<Link to="search">Search Evictions</Link>
				<Link to="report">Report Eviction</Link>
				<Link to="manage">Manage Reports</Link>
				<Link to="settings">Settings</Link>
				<Link to="profile">Profile</Link>
				<Link to="/" onClick={logout}>Log Out</Link>
			</nav>
			<Outlet />
		</div>
	)
};
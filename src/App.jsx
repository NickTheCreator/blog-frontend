import { Alayout } from "./Components/alayout";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
	return (
		<>
			<Alayout />

			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;

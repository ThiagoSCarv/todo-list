import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/pagesComponents";
import LayoutMain from "./pages/layoutMain";
import PageHome from "./pages/pageHome";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
					<Route path="/components" element={<PageComponents />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

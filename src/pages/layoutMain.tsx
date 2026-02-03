import { Outlet } from "react-router";
import Header from "../coreComponents/header";
import MainContent from "../coreComponents/mainContent";
import Footer from "../coreComponents/footer";

export default function LayoutMain() {
	return (
		<>
			<Header />

			<MainContent className="mt-4 md:mt-8">
				<Outlet />
			</MainContent>
			<Footer />
		</>
	);
}

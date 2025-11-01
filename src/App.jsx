import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './components/heroSection';
import TechPathway from './components/techPathWays';
import WhyChooseUs from './components/whyChooseUs';
import Team from './components/team';
import WhoCanJoinUs from './components/whoCanJoinUs';
import Footer from './components/footer';

import UiUxPage from './components/pages/UiUxPage';
import FrontendPage from './components/pages/FrontendPage';
import BackendPage from './components/pages/BackendPage';
import CheckOutPage from './components/pages/CheckOutPage';

function App() {
	return (
		<Router>
			<Routes>
				{/* Home Page */}
				<Route
					path="/"
					element={
						<div className="font-playpen">
							<Header />
							<HeroSection />
							<TechPathway />
							<WhyChooseUs />
							<Team />
							<WhoCanJoinUs />
							<Footer />
						</div>
					}
				/>

				{/* Individual Track Pages */}
				<Route
					path="/ui-ux"
					element={<UiUxPage />}
				/>
				<Route
					path="/frontend"
					element={<FrontendPage />}
				/>
				<Route
					path="/backend"
					element={<BackendPage />}
				/>
				<Route
					path="/checkout"
					element={<CheckOutPage />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

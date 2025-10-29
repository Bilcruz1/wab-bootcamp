import React from 'react';
import Header from './components/header';
import HeroSection from './components/heroSection';
import TechPathway from './components/techPathWays';
import WhyChooseUs from './components/whyChooseUs';
import Team from './components/team';
import WhoCanJoinUs from './components/whoCanJoinUs';
import Footer from './components/footer';

function App() {
	return (
		<>
			<div className="font-playpen">
				<Header />
				<HeroSection />
				<TechPathway />
				<WhyChooseUs />
				<Team />
				<WhoCanJoinUs />
				<Footer />
			</div>
		</>
	);
}

export default App;

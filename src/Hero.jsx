import heroImg from "./assets/hero.svg";
export const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Gatekeep neutral milk hotel fam plaid deep v twee master cleanse
						stumptown intelligentsia la croix tote bag 3 wolf moon artisan etsy
						grailed. Cloud bread freegan flannel, Brooklyn humblebrag cred
						glossier letterpress green juice waistcoat fashion axe roof party
					</p>
					<div className="img-container">
						<img src={heroImg} alt="woman and the browser" className="img" />
					</div>
				</div>
			</div>
		</section>
	);
};

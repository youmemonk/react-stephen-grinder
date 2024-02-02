import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import ProfileCard from "./ProfileCard";
import "bulma/css/bulma.css";

const App = () => {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>

			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column is-3">
							<ProfileCard
								title="Alexa"
								handle="@alexa99"
								image={AlexaImage}
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis. "
							/>
						</div>
						<div className="column is-3">
							<ProfileCard
								title="Cortana"
								handle="@cortana32"
								image={CortanaImage}
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis. "
							/>
						</div>
						<div className="column is-3">
							<ProfileCard
								title="Siri"
								handle="@siri01"
								image={SiriImage}
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis. "
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default App;

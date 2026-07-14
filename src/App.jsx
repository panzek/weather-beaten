import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Footer from './components/Footer';
import Navigation from './components/Navbar.jsx';
import Socials from './components/Socials/Socials';
import Weather from './components/Weather';
import './Fontawesome.js';

import axios from 'axios';
import { DateTime } from 'luxon';
import { Card, Col, Container, Row } from 'react-bootstrap';

const App = () => {
	const refresh = () => {
		window.location.reload();
	};

	const [weather, setWeather] = useState({});
	const [city, setCity] = useState('');
	const [status, setStatus] = useState('typing');
	const [error, setError] = useState(false);
	const [displayTime, setDisplayTime] = useState(null);
	const [isLoading, setIsLoading] = useState(false)

	const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

	const getWeather = async () => {
		try {
			const response = await axios.get(
				`${VITE_API_URL}/weather?q=${city}&APPID=${VITE_API_KEY}&units=metric`,
			);
			const data = response.data;
			console.log('API Data', data);

			const { dt, timezone } = data;
			const time = DateTime.fromSeconds(dt + timezone);
			const cityTime = time.toLocaleString({
				hour: '2-digit',
				minute: '2-digit',
				weekday: 'short',
				month: 'short',
				day: '2-digit',
				year: 'numeric',
			});

			setWeather(data);
			setDisplayTime(cityTime);
		} catch (err) {
			console.error(err.message);
			setError(err.message);
		}
	};

	const getCurrentYear = () => {
		const dateTime = DateTime.local();
		return dateTime.year;
	};

	const handleChange = (e) => {
		setCity(e.target.value);
	};

	const handleClick = async () => {
		if (!city) return;

		setIsLoading(true);
		setStatus('submitting');

		await new Promise((resolve) => setTimeout(resolve, 1500));

		await getWeather();

		setIsloading(false);
		setStatus('typing');
	};

	const getWeatherIcon = () => {
		if (!weather) return null;

		const icon = weather.weather[0].icon;
		const iconUrl = `https://openweathermap.org/img/wn/${icon.replace('n', 'd')}@2x.png`;

		return <img src={iconUrl} alt="Weather Icon" />;
	};

	return (
		<>
			<Navigation />
			<Container>
				<Row>
					<Col className="display position-relative">
						<Card
							className="text-center shadow-sm"
							style={{ width: '21rem', height: '28rem' }}
						>
							<Card.Header
								className="text-muted fw-bold"
								style={{ fontSize: '1.4rem' }}
							>
								Weather-Beaten App
							</Card.Header>
							<Card.Body>
								<Card.Text>
									<Buttons
										refresh={refresh}
										city={city}
										status={status}
										handleChange={handleChange}
										isLoading={isLoading}
										handleClick={handleClick}
										checkWeather="Check Weather"
										refreshText="Refresh"
									/>
								</Card.Text>
							</Card.Body>
							<Card.Body>
								<Weather
									refresh={refresh}
									weather={weather}
									city={city}
									status={status}
									error={error}
									displayTime={displayTime}
									handleChange={handleChange}
									handleClick={handleClick}
									getWeatherIcon={getWeatherIcon}
									refreshText="Refresh"
									heading="Weather-Beaten App"
									checkWeather="Check Weather"
								// loading="loaded"
								/>
							</Card.Body>
							<Card.Body>
								<Socials />
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Footer getCurrentYear={getCurrentYear} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default App;

import { Button, Form } from 'react-bootstrap';

const Buttons = ({
	refresh,
	city,
	handleChange,
	status,
	isLoading,
	handleClick,
	checkWeather,
	refreshText,
}) => {
	return (
		<>
			<Form.Control
				className="w-100 "
				size="sm"
				type="text"
				value={city}
				onChange={handleChange}
				disabled={isLoading}
				placeholder="Enter City..."
			/>
			<Button
				className="mt-2"
				variant="dark"
				size="sm"
				onClick={handleClick}
				disabled={city?.length === 0 || isLoading}
			>
				{isLoading ? "Loading..." : checkWeather}
			</Button>
			<Button
				className="mt-2 ms-1"
				variant="outline-secondary"
				size="sm"
				onClick={refresh}
			>
				{refreshText}
			</Button>
		</>
	);
};

export default Buttons;

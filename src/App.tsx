import React, {useState} from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
	const items = ["Gaza", "Rafah", "KhanYounis"];
	const handleSelectedItem = (item: string) => {
		console.log(item);
	};
	const [visibility, setVisibility] = useState(false);
	return (
		<div>
			{/* <ListGroup
				items={items}
				heading="Cities"
				onSelectedItems={handleSelectedItem}
			/> */}
			{/* <Alert>
				Hello<span>World</span>
			</Alert> */}
			{visibility && <Alert onClick={() => setVisibility(false)}>Alert</Alert>}
			<Button onClick={() => setVisibility(true)} color="primary">
				My Button
			</Button>
		</div>
	);
};

export default App;

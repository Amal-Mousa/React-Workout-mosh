import React, {useState} from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Message from "./Message";
import Counter from "./components/Counter";
// import UpdatingObject from "./components/UpdatingObject";
import UpdatingNestedObject from "./components/UpdatingNestedObject";
import UpdatingArray from "./components/UpdatingArray";
import UpdatingNestedArray from "./components/UpdatingArray";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Game from "./components/Game";
import Pizza from "./components/Pizza";
import CartExercise from "./components/CartExercise";
import ExpandedText from "./components/ExpandedText";
import Form from "./components/FormRef";
import FormState from "./components/FormState";
import ReactHookForm from "./components/ReactHookForm";
import ZodValidation from "./components/zodValidation";

const App = () => {
	const items = ["Gaza", "Rafah", "KhanYounis"];
	const handleSelectedItem = (item: string) => {
		console.log(item);
	};
	const [visibility, setVisibility] = useState(false);
	const [cartItems, setCartItems] = useState(["product1", "product2"]);

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
			{/* {visibility && <Alert onClick={() => setVisibility(false)}>Alert</Alert>}
			<Button onClick={() => setVisibility(true)} color="primary">
				My Button
			</Button> */}
			{/* <Message/>			
			<Message/>			
			<Message/>			 */}
			{/* <h1>App without Strict Mode</h1>
			<Counter /> */}
			{/* <UpdatingNestedObject /> */}
			{/* <UpdatingNestedArray/> */}

			{/* <Navbar cartItems={cartItems.length} />
			<Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}

			{/* <Game /> */}

			{/* <Pizza/> */}

			{/* <CartExercise/> */}
			{/* <ExpandedText>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dignissimos fuga enim mollitia
				delectus incidunt esse ut? Facilis possimus neque inventore sunt dolore iusto corrupti perferendis
				quia, in nobis vero sed esse commodi atque? Temporibus impedit minima iusto similique sequi vero d
				electus ipsa veniam, fugiat aspernatur, ab aperiam illo velit maxime expedita error quaerat? Non l
				aboriosam consequatur eos laudantium voluptates quia ab unde atque tempore numquam. Ea amet mollitia
				voluptate possimus! Nam ut iste ullam voluptatibus aperiam eum dignissimos nostrum rem sit earum, qu
				am praesentium libero. Illum magni, optio, ipsa cumque temporibus illo culpa, beatae voluptates omnis
				id eaque soluta.
			</ExpandedText> */}

			{/* <Form /> */}

			{/* <FormState /> */}

			{/* <ReactHookForm /> */}
			<ZodValidation />
		</div>
	);
};

export default App;

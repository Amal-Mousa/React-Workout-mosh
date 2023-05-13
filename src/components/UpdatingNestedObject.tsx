import React, {useState} from "react";

// 
// const UpdatingObject = () => {
// 	const [drink, setDrink] = useState({
// 		type: "coffee",
// 		price: 4
// 	});

// 	// console.log(drink); // 4

// 	const handleDrink = () => {
// 		setDrink({...drink, price: 5});
// 		// console.log(drink); // 5
// 	};
// 	return (
// 		<div>
// 			{drink.price}
// 			<button onClick={handleDrink}>Click Me</button>
// 		</div>
// 	);
// };

// export default UpdatingObject;


  const UpdatingNestedObject = () => {
    const [person, setPerson] = useState({
      name: {
        firstName: 'John',
        lastName: 'Smith',
      },
      age: 20,
    });

    const handlePerson = () => {
      setPerson({...person, name:{...person.name, firstName:'Amal'}});
    }
    return (
      <div>
        {person.name.firstName}
        <button className="btn" onClick={handlePerson}>Click Here</button>
      </div>
    )
  };

  export default UpdatingNestedObject;

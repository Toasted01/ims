import { useState } from 'react';

function SearchBar(props) {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [type, setType] = useState('');
	const [brand, setBrand] = useState('');

	const searchPressed = () => {
		props.searchItem({name: name, price: price, type: type, brand: brand});
		setName("");
        setPrice(0);
        setType("");
        setBrand("");
	};

	return (
		<div>
			<h2>Search for an item</h2>
			<form action=''>
				<label htmlFor='nameInput'>Name: </label>
				<input
					id='nameInput'
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor='priceInput'>Price: </label>
				<input
					id='priceInput'
					type='number'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>

				<label htmlFor='typeInput'>Type: </label>
				<input
					id='typeInput'
					type='text'
					value={type}
					onChange={(e) => setType(e.target.value)}
				/>

				<label htmlFor='brandInput'>Brand: </label>
				<input
					id='brandInput'
					type='text'
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
				/>

				<button type='button' onClick={searchPressed}>Search</button>
			</form>
		</div>
	);
}

export default SearchBar;

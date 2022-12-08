import './App.css';
import { useState, useEffect } from 'react';
import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import ImageDetailsPage from './ImageDetailsPage';
import ImageInfo from './ImageInfo';

export function App() {
	const [data, setData] = useState([]);
	const [params, setParams] = useState(window.location.hash.slice(1));

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			console.log(json);
			setData(json);
		});
	}

	useEffect(() => {
		window.addEventListener('hashchange', () => {
			setParams(window.location.hash);
		});
	}, []);

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<ul>
				{data.data && !params
					? data.data
							.filter((image) => image.image_id !== null)
							.map((image) => {
								return (
									<li key={image.image_id}>
										<ImageInfo data={image} />
									</li>
								);
							})
					: null}
			</ul>
			{params && <ImageDetailsPage setParams={setParams} />}
			<Footer />
		</div>
	);
}

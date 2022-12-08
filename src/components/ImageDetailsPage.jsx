function ImageDetailsPage({ setId }) {
	console.log(window.location);
	return (
		<div>
			<a href="/" style={{ display: 'block' }}>
				home
			</a>
			<img
				alt=""
				src={`https://www.artic.edu/iiif/2/${window.location.hash.slice(
					1
				)}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
export default ImageDetailsPage;

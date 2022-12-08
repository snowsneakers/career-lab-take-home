function ImageInfo({ data }) {
	const { title, artist_title, image_id } = data;
	return (
		<div className="paintingListItem">
			<a className="artTitle" href={`#${image_id}`}>
				{title ? title : 'Untitled'}
			</a>
			<p>{artist_title ? artist_title : 'Unknown'}</p>
		</div>
	);
}
export default ImageInfo;

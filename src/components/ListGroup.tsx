import { useState } from "react";

interface Props {
	posts: string[];
	heading: string;
}

function ListGroup(props: Props) {
	let [selectedPostIndex, setSelectedPostIndex] = useState(-1);
	let { posts, heading } = props;

	return (
		<>
			<h1>{heading}</h1>
			<ul className='list-group'>
				{posts.length > 0 ? (
					posts.map((post, index) => (
						<li
							key={index}
							className={
								index === selectedPostIndex
									? "list-group-item active"
									: "list-group-item"
							}
							onClick={() => {
								setSelectedPostIndex(index);
							}}
						>
							{post}
						</li>
					))
				) : (
					<p>No posts found</p>
				)}
			</ul>
		</>
	);
}

export default ListGroup;

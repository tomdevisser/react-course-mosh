import ListGroup from "./components/ListGroup";

function App() {
	const posts = ["An item", "A second item", "A third item"];

	return (
		<ListGroup
			posts={posts}
			heading='Posts'
		/>
	);
}

export default App;

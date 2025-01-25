import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
	return (
		<Fragment>
			<h1>Index</h1>
			<Link to={'/api-test'}>Go to /api-test</Link>
		</Fragment>
	)
};

export default Root;

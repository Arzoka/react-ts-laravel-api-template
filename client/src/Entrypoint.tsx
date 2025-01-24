import { Fragment } from 'react';
import { WebsiteRoutes } from '@/routes';
import { RouterProvider } from 'react-router-dom';

const Entrypoint = () => {
	return (
		<Fragment>
			<RouterProvider router={ WebsiteRoutes } />
		</Fragment> );
};

export default Entrypoint;

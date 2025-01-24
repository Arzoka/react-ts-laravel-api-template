import { createBrowserRouter } from 'react-router-dom';
import Root from '@/pages/website/root';
import ApiTest from '@/pages/website/api-test';
const WebsiteRoutes = createBrowserRouter([
	{
		path: '/',
		element:
			<Root />,
	},
	{
		path: '/api-test',
		element: <ApiTest />
	}
]);

export default WebsiteRoutes;

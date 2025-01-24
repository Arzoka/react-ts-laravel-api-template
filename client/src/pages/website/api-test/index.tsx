import { Fragment } from 'react';
import useApi from '@/hooks/custom/useApi.ts';
import useAsyncMemo from '@/hooks/custom/useAsyncMemo.ts';

const ApiTest = () => {
	const {testobject} = useApi();
	const fetchedTestobjects = useAsyncMemo(() => testobject.getAll(), [],[]);

	return (
		<Fragment>
			<h1>ApiTest</h1>
			{JSON.stringify(fetchedTestobjects)}
		</Fragment>
	)
};

export default ApiTest;

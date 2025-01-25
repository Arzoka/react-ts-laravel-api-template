import { Fragment } from 'react';
import useApi from '@/hooks/custom/useApi.ts';
import useAsyncMemo from '@/hooks/custom/useAsyncMemo.ts';

const ApiTest = () => {
	const {
		testobject,
		authobject,
		auth,
	} = useApi();
	const fetchedTestobjects = useAsyncMemo( () => testobject.getAll(), [], [] );
	const fetchedAuthobjects = useAsyncMemo( () => authobject.getAll(), [], [] );

	return (
		<Fragment>
			<h1>ApiTest</h1>

			<p>Register as:</p>
			<p>
				{ `{
	"name": "testuser",
	"email": "testuser@gmail.com",
	"password": "testpassword"
}` }
			</p>
			<button onClick={ async () => await auth.register( {
				name: 'testuser',
				email: 'testuser@gmail.com',
				password: 'testpassword',
			} ) }>Register
			</button>

			<p>Login as:</p>
			<p>
				{ `{
	"email": "testuser@gmail.com",
	"password": "testpassword"
}` }
			</p>
			<button onClick={ async () => await auth.login( {
				email: 'testuser@gmail.com',
				password: 'testpassword',
			} ) }>Login
			</button>
			<details>
				<summary>
					<h2>Fetched objects</h2>
				</summary>
				<p>Testobjects</p>
				{ JSON.stringify( fetchedTestobjects ) }
				<p>Authobjects</p>
				{ JSON.stringify( fetchedAuthobjects ) }
			</details>
		</Fragment> );
};

export default ApiTest;

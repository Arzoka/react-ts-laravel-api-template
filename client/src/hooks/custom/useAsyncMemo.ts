import { DependencyList, useEffect, useState } from 'react';

export default function useAsyncMemo<T>( asyncFn: () => Promise<T>, deps: DependencyList, fallback: T ): T {
	const [value, setValue] = useState<T>( fallback );

	useEffect( () => {
		let isMounted = true;

		asyncFn().then( result => {
			if ( isMounted ) { setValue( result ); }
		} );

		return () => {
			isMounted = false;
		};
	}, deps );

	return value;
}

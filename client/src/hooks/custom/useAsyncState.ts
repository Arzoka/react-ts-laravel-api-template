import { DependencyList, Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useAsyncState<T>( asyncFn: () => Promise<T>, deps: DependencyList, fallback: T ): [T, Dispatch<SetStateAction<T>>] {
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

	return [value, setValue];
}

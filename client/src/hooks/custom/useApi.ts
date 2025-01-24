import Api from '@/globals/classes/Api.ts';
import { useCallback, useState } from 'react';
import { TestobjectType } from '@/types';

const useApi = () => {
	const apiInstance = new Api( import.meta.env.VITE_API_URL );

	const [loading, setLoading] = useState( false );
	const [error, setError] = useState<null | string>( null );

	// Generic handler for API calls
	const handleRequest = useCallback( async ( apiCall: () => Promise<any>, errorMessage: string ) => {
		setLoading( true );
		setError( null );
		try {
			return await apiCall();
		} catch ( err ) {
			setError( errorMessage );
			throw err;
		} finally {
			setLoading( false );
		}
	}, [] );

	// Testobject
	const fetchTestobjects = useCallback( (): Promise<TestobjectType[]> => handleRequest( () => apiInstance.testobject.getAll(), 'Failed to fetch testobjects' ), [apiInstance, handleRequest] );
	const fetchTestobject = useCallback( ( id: number ): Promise<TestobjectType> => handleRequest( () => apiInstance.testobject.get( id ), 'Failed to fetch testobject' ), [apiInstance, handleRequest] );
	const createTestobject = useCallback( ( body: TestobjectType ): Promise<TestobjectType> => handleRequest( () => apiInstance.testobject.create( body ), 'Failed to create testobject' ), [apiInstance, handleRequest] );
	const updateTestobject = useCallback( ( id: number, body: TestobjectType ): Promise<TestobjectType> => handleRequest( () => apiInstance.testobject.update( id, body ), 'Failed to update testobject' ), [apiInstance, handleRequest] );
	const deleteTestobject = useCallback( ( id: number ): Promise<TestobjectType> => handleRequest( () => apiInstance.testobject.delete( id ), 'Failed to delete testobject' ), [apiInstance, handleRequest] );

	return {
		loading,
		error,
		testobject: {
			getAll: fetchTestobjects,
			get: fetchTestobject,
			create: createTestobject,
			update: updateTestobject,
			delete: deleteTestobject,
		}
	};
};

export default useApi;

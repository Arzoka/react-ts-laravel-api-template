import { TestobjectType } from '@/types';

export default class Api {
	private readonly API_URL: string;

	constructor(API_URL: string) {
		this.API_URL = API_URL;
	}

	// Testobject
	public testobject = {
		getAll: (): Promise<TestobjectType[]> => this.request('GET', 'testobject'),
		get: (id: number): Promise<TestobjectType> => this.request('GET', `testobject/${id}`),
		create: (body: TestobjectType): Promise<TestobjectType> => this.request('POST', 'testobject', body),
		update: (id: number, body: TestobjectType): Promise<TestobjectType> => this.request('PUT', `testobject/${id}`, body),
		delete: (id: number): Promise<TestobjectType> => this.request('DELETE', `testobject/${id}`),

	};

	private async request( method: string, endpoint: string, body?: unknown ) {
		const res = await fetch( `${ this.API_URL }/api/${ endpoint }`, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify( body ),
		} );
		return await res.json();
	}
}

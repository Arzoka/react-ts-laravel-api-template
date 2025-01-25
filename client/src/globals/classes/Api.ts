import { AuthobjectType, CreateAuthobjectType, CreateTestobjectType, CreateUserType, LoginUserType, TestobjectType, UserType } from '@/types/api';

export default class Api {
	private readonly API_URL: string;
	private AUTH_TOKEN: string | null;

	constructor(API_URL: string) {
		this.API_URL = API_URL;
		this.AUTH_TOKEN = localStorage.getItem('auth_token') || null;
	}

	// Testobject
	public testobject = {
		getAll: (): Promise<TestobjectType[]> => this.request('GET', 'testobject'),
		get: (id: number): Promise<TestobjectType> => this.request('GET', `testobject/${id}`),
		create: (body: CreateTestobjectType): Promise<TestobjectType> => this.request('POST', 'testobject/create', body),
		update: (id: number, body: CreateTestobjectType): Promise<TestobjectType> => this.request('PUT', `testobject/update/${id}`, body),
		delete: (id: number): Promise<TestobjectType> => this.request('DELETE', `testobject/destroy/${id}`),
	};

	public authobject = {
		getAll: (): Promise<AuthobjectType[]> => this.request('GET', 'authobject'),
		get: (id: number): Promise<AuthobjectType> => this.request('GET', `authobject/${id}`),
		create: (body: CreateAuthobjectType): Promise<AuthobjectType> => this.request('POST', 'authobject/create', body),
		update: (id: number, body: CreateAuthobjectType): Promise<AuthobjectType> => this.request('PUT', `authobject/update/${id}`, body),
		delete: (id: number): Promise<AuthobjectType> => this.request('DELETE', `authobject/destroy/${id}`),
	};

	public auth = {
		register: (body: CreateUserType): Promise<UserType> => this.request('POST', 'register', body, true),
		login: (body: LoginUserType): Promise<UserType> => this.request('POST', 'login', body, true),
		logout: (): Promise<UserType> => this.request('POST', 'logout', true),
	};

	private async request( method: string, endpoint: string, body?: unknown, noApi:boolean = false ) {
		const res = await fetch( `${ this.API_URL }${noApi ? '' : '/api'}/${ endpoint }`, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': this.AUTH_TOKEN ? `Bearer ${ this.AUTH_TOKEN }` : '',
			},
			body: JSON.stringify( body ),
		} );

		const json = await res.json();

		endpoint === 'login' && res.ok && localStorage.setItem( 'auth_token', json.token );
		endpoint === 'logout' && res.ok && localStorage.removeItem( 'auth_token' );

		this.AUTH_TOKEN = localStorage.getItem('auth_token') || null;

		return json;
	}
}

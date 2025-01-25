import { Constants } from '@/types/api/Constants.ts';

type CreateAuthobjectType = {
	name: string;
}

type AuthobjectType = CreateAuthobjectType & Constants;

export type {
	CreateAuthobjectType,
	AuthobjectType
}

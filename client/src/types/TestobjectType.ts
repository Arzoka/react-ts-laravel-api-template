import { Constants } from '@/types/Constants.ts';

type CreateTestobjectType = {
	name: string;
}

type TestobjectType = CreateTestobjectType & Constants;

export type {
	CreateTestobjectType,
	TestobjectType
}

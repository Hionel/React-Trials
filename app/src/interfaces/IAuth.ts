export interface ILoginObject {
	identifierValue: string | undefined;
	indentifierType: string | undefined;
	password: string | undefined;
}

export enum EIds {
	indetifier = "identifier-input",
	password = "password-input",
	// OTHER REGSITER FIELDS
}

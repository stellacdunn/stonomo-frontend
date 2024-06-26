export interface searchFields {
	searchName: string;
	searchPhone: string;
	searchEmail: string;
}

export interface evictionCardFields {
	_id: string;
	evictedOn: string;
	user: {
		facilityAddress: {
			city: string;
			state: string;
		}
	}
	nameMatches: boolean;
	phoneMatches: boolean;
	emailMatches: boolean;
}

export interface evictionPageFields {
	_id: string;
	tenantName: string;
	tenantPhone: string;
	tenantEmail: string;
	evictedOn: string;
	reason: string;
	details: [{
		_id: string;
		content: string;
		createdAt: string;
	}]
	user: {
		_id: string;
		facilityName: string;
		facilityAddress: {
			city: string;
			state: string;
		}
	}
}

export interface profileFields {
	facilityName: string;
	facilityPhone: string;
	facilityEmail: string;
	facilityAddress: {
		street1: string;
		street2: string;
		street3: string;
		city: string;
		state: string;
		zip: string;
	}
}

export interface settingsFields {
	username: string;
}

export interface reasonFields {
	label: string;
	desc: string;
}

export interface accessTokenFields {
	name: string;
	id: string;
	plan: string,
	tokenFamily: string,
	nonce: string,
	tokenType: string,
	exp: number,
	iat: number
}

export interface refreshTokenFields {
	name: string;
	tokenFamily: string,
	nonce: string,
	tokenType: string,
	exp: number,
	iat: number
}
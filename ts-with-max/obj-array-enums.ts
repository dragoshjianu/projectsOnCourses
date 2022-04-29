enum AccessLevel {
	ADMIN = '111',
	READ_ONLY = '001',
	AUTHOR = '011',
}

const person: {
	name: string;
	age: number;
	role: [number, string, string]; //tuple type
	access: AccessLevel;
} = {
	name: 'Dragos',
	age: 33,
	role: [2, 'admin', 'user'],
	access: AccessLevel.ADMIN,
};

console.log(person);

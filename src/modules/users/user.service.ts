import { prisma } from '../../lib/prisma.js';

export interface CreateUserInput {
	name: string;
	email: string;
}

export function createUser(input: CreateUserInput) {
	return prisma.user.create({
		data: input,
	});
}

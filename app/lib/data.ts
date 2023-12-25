import prisma from './db';

export async function fetchPatients() {
    try {
        return await prisma.patient.findMany({});
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest invoices.');
    }
}
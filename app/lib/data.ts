import prisma from './db';

export async function fetchPatients() {
    try {
        return await prisma.patient.findMany({});
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest invoices.');
    }
}

export async function fetchFirstPatient() {
    try {
        return await prisma.patient.findFirst({});
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest patient info.');
    }
}

export async function fetchPatientAndVisits() {
    try {
        return await prisma.patient.findFirst({
            include: {
                visits: true
            }
        });
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest visits for patient');
    }
}
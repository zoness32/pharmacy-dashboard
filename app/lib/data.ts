import prisma from './db';

export async function fetchPatientAndVisitsById(id: string) {
    try {
        return await prisma.patient.findUnique({
            where: {
                id: id
            },
            include: {
                visits: {
                    orderBy: {
                        visit_time: 'desc'
                    }
                }
            }
        });
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error(`Failed to fetch the patient by id: ${id}`);
    }
}

export async function fetchPatients() {
    try {
        return await prisma.patient.findMany({});
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch patients');
    }
}
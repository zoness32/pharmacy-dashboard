import prisma from './db';

export async function fetchPatientAndVisits() {
    try {
        return await prisma.patient.findFirst({
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
        throw new Error('Failed to fetch the patient');
    }
}
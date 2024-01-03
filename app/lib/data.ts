import prisma from './db';

export async function fetchPatients() {
    try {
        return await prisma.patient.findMany({});
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch patients');
    }
}

export async function fetchPatientById(patient_id: string) {
    try {
        return await prisma.patient.findUnique({
            where: {
                id: patient_id
            }
        });
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error(`Failed to fetch patient by id ${patient_id}`);
    }
}

export async function fetchFilteredVisitsForPatient(
  query: string,
  patient_id: string
) {
    try {
        // This will take a query and search all specified columns for that value.
        // Unfortunately it's limited to only text-based columns, so not every field
        // can be searched this way - or more precisely, I was unable to find a workaround
        // using Prisma in the time I allotted to this piece.
        // see https://www.prisma.io/docs/orm/prisma-client/queries/full-text-search
        return await prisma.visit.findMany({
            where: {
                AND: [
                    {
                        patient_id: patient_id
                    }
                ],
                OR: [
                    {
                        administration_location: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        administering_nurse: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        medication: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        blood_pressure: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                ]
            }
        });
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error(`Search failed with term ${query}`);
    }
}
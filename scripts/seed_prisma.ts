const { PrismaClient } = require('@prisma/client');
const { patients, visits } = require('../app/lib/mockData');

const prisma = new PrismaClient();

async function main() {
    let start = 0;
    let end = 7;

    for (const patient of patients) {
        const visitsSlice = visits.slice(start, end);
        start += 7;
        end += 7;

        await prisma.patient.create({
            data: {
                first_name: patient.first_name,
                last_name: patient.last_name,
                email: patient.email,
                birthdate: new Date(patient.birthdate),
                address: patient.address,
                sex: patient.sex,
                blood_type: patient.blood_type,
                city: patient.city,
                state: patient.state,
                zipcode: patient.zipcode,
                visits: {
                    createMany: { data: visitsSlice }
                }
            },
        });
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

const { patients, visits } = require('../app/lib/mockData');
const { prismaClient } = require('../app/lib/db');

async function main() {
    let start = 0;
    let end = 7;

    for (const patient of patients) {
        const visitsSlice = visits.slice(start, end);
        start += 7;
        end += 7;

        await prismaClient.patient.create({
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
        await prismaClient.$disconnect();
    });

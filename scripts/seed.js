const { db } = require('@vercel/postgres');
const {
  patients,
  visits
} = require('../app/lib/mockData.js');

async function seedPatients(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS patients (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        birthdate DATE NOT NULL,
        address TEXT NOT NULL
      );
    `;

    console.log(`Created "patients" table`);

    // Insert data into the "patients" table
    const insertedPatients = await Promise.all(
      patients.map(async (patient) => {
        return client.sql`
        INSERT INTO patients (id, name, email, birthdate, address)
        VALUES (${patient.id}, ${patient.name}, ${patient.email}, ${patient.birthdate}, ${patient.address})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedPatients.length} patients`);

    return {
      createTable,
      patients: insertedPatients,
    };
  } catch (error) {
    console.error('Error seeding patients:', error);
    throw error;
  }
}

async function seedVisits(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS visits (
          id UUID PRIMARY KEY,
          patient_id UUID NOT NULL,
          visit_time DATE NOT NULL,
          administration_location TEXT NOT NULL,
          location TEXT NOT NULL,
          administering_nurse TEXT NOT NULL,
          medication TEXT NOT NULL,
          visit_duration_seconds INTEGER NOT NULL,
          heart_rate_BPM INTEGER NOT NULL,
          blood_pressure
          medication_tolerance TEXT NOT NULL
      );
    `;

    console.log(`Created "visits" table`);

    // Insert data into the "invoices" table
    const insertedVisits = await Promise.all(
      visits.map(
        (visit) => client.sql`
            INSERT INTO visits (
                                id,
                                patient_id, 
                                visit_time, 
                                administration_location, 
                                location, 
                                administering_nurse,
                                medication, 
                                visit_duration_seconds, 
                                biological_data_id,
                                medication_tolerance
            )
            VALUES (
                    ${ visit.id },
                    ${ visit.patient_id }, 
                    ${ visit.visit_time }, 
                    ${ visit.administration_location },
                    ${ visit.location }, 
                    ${ visit.administering_nurse },
                    ${ visit.medication }, 
                    ${ visit.visit_duration_seconds },
                    ${ visit.biological_data_id },
                    ${ visit.medication_tolerance }
                   ) ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedVisits.length} visits`);

    return {
      createTable,
      visits: insertedVisits,
    };
  } catch (error) {
    console.error('Error seeding visits:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedPatients(client);
  await seedBiologicalData(client);
  await seedVisits(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

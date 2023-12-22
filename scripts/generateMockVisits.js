const adminLocations = ["inhome", "hospital"];
const medicationTolerances = ["terrible", "bad", "neutral", "good", "great"];
const weeks = 17;
const visits = [];

// initializing the date to 06/10/2023
let visitDate = new Date('2023-06-10T00:00:00');

for (let i = 0; i < weeks; i++) {
  visits.push({
    visitTime: new Date(visitDate),
    location: "Mock City",
    administrationLocation: adminLocations[Math.floor(Math.random()*adminLocations.length)],
    administeringNurse: "Mock Nurse",
    medication: "Mock Medicine",
    visitDurationSeconds: 3600,
    biologicalData: {
      heartRateBPM: 80,
      bloodPressure: "120/80",
      painLevel: 5
    },
    medicationTolerance: medicationTolerances[Math.floor(Math.random()*medicationTolerances.length)]
  });
  // increment the date by one week
  visitDate.setDate(visitDate.getDate() + 7);
}
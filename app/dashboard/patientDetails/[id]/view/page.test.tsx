// import { vi, test, expect, Mock } from 'vitest';
// import { render, screen } from "@testing-library/react";
// import Page from "@/app/dashboard/patientDetails/[id]/view/page";
// import { fetchFilteredVisitsForPatient, fetchPatientById } from "@/app/lib/data";
//
// vi.mock('@/app/lib/data', () => ({
//  fetchPatientById: vi.fn(),
//  fetchFilteredVisitsForPatient: vi.fn(),
// }));
//
// test('Page', async () => {
//  (fetchPatientById as Mock).mockResolvedValue({
//   "first_name": "Arvy",
//   "last_name": "Bowler",
//   "email": "abowlera@google.ru",
//   "sex": "female",
//   "blood_type": "O+",
//   "address": "45083 La Follette Circle",
//   "city": "New York City",
//   "state": "New York",
//   "birthdate": "1986-06-23T21:23:17Z",
//   "zipcode": "10004"
//  });
//
//  (fetchFilteredVisitsForPatient as Mock).mockResolvedValue([]);
//
//  render(<Page params={{id: '123'}} />);
//
//  expect(screen.getByRole("section")).toBeDefined();
// });
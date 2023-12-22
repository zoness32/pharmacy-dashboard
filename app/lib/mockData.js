const users = [
  {
    "id": "c0507f23-6f03-4472-905b-ec050f7f04fc",
    "name": "Alice Johnson",
    "email": "alice@johnson.com",
    "birthdate": "1976-05-22",
    "address": "949 Cedar St, SomeCity, SomeState, 52713"
  },
  {
    "id": "529003b4-87d7-447f-88fa-b2c32e16e0f9",
    "name": "Bob Smith",
    "email": "bob@smith.com",
    "birthdate": "1950-05-23",
    "address": "678 Cedar St, SomeCity, SomeState, 33585"
  },
  {
    "id": "141bb0fa-38fe-46c1-a9ff-482dccfb76e6",
    "name": "Carol Williams",
    "email": "carol@williams.com",
    "birthdate": "1996-01-30",
    "address": "158 Pine St, SomeCity, SomeState, 47420"
  },
  {
    "id": "7aa03b57-3c03-4484-9907-3607a718cc0b",
    "name": "David Brown",
    "email": "david@brown.com",
    "birthdate": "1940-01-10",
    "address": "919 Maple St, SomeCity, SomeState, 91999"
  },
  {
    "id": "1f1c21ec-b230-4b97-9ae6-83e661900178",
    "name": "Eve Davis",
    "email": "eve@davis.com",
    "birthdate": "1936-10-16",
    "address": "784 Main St, SomeCity, SomeState, 58700"
  }
];

const visits = [
  {
    "id": "bff6222a-a6ae-438a-96d5-b2f33cc42591",
    "patientId": "c0507f23-6f03-4472-905b-ec050f7f04fc",
    "visitTime": "2023-08-20 05:53:39",
    "administrationLocation": "inhome",
    "location": "949 Cedar St, SomeCity, SomeState, 52713",
    "administeringNurse": "Liam Walker",
    "medication": "Amlodipine",
    "visitDurationSeconds": 3547,
    "biologicalData": { "heartRateBPM": 88, "bloodPressure": "126/68", "painLevel": 5 },
    "medicationTolerance": "neutral"
  }, {
    "id": "131db2d4-2c0e-4a16-89b8-1fcc34aa0a08",
    "patientId": "c0507f23-6f03-4472-905b-ec050f7f04fc",
    "visitTime": "2022-12-13 17:21:33",
    "administrationLocation": "inhome",
    "location": "949 Cedar St, SomeCity, SomeState, 52713",
    "administeringNurse": "Nancy Clark",
    "medication": "Amlodipine",
    "visitDurationSeconds": 7299,
    "biologicalData": { "heartRateBPM": 74, "bloodPressure": "112/60", "painLevel": 10 },
    "medicationTolerance": "neutral"
  }, {
    "id": "8ed597bf-6f93-4ef0-8e65-d5030ec4cdb4",
    "patientId": "c0507f23-6f03-4472-905b-ec050f7f04fc",
    "visitTime": "2023-08-15 07:47:21",
    "administrationLocation": "inhome",
    "location": "949 Cedar St, SomeCity, SomeState, 52713",
    "administeringNurse": "Nancy Clark",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 9436,
    "biologicalData": { "heartRateBPM": 94, "bloodPressure": "122/82", "painLevel": 5 },
    "medicationTolerance": "neutral"
  }, {
    "id": "07f24dd2-1df5-4cb9-b500-1330192323cd",
    "patientId": "c0507f23-6f03-4472-905b-ec050f7f04fc",
    "visitTime": "2022-12-16 17:38:46",
    "administrationLocation": "inhome",
    "location": "949 Cedar St, SomeCity, SomeState, 52713",
    "administeringNurse": "Sophia Young",
    "medication": "Lisinopril",
    "visitDurationSeconds": 3170,
    "biologicalData": { "heartRateBPM": 99, "bloodPressure": "134/62", "painLevel": 0 },
    "medicationTolerance": "great"
  }, {
    "id": "715b057b-7a21-4250-a6de-85e6022259a2",
    "patientId": "c0507f23-6f03-4472-905b-ec050f7f04fc",
    "visitTime": "2023-07-24 15:21:17",
    "administrationLocation": "hospital",
    "location": "752 Pine St, HospitalCity, HospitalState, 80432",
    "administeringNurse": "Kevin Moore",
    "medication": "Amlodipine",
    "visitDurationSeconds": 4225,
    "biologicalData": { "heartRateBPM": 60, "bloodPressure": "111/87", "painLevel": 2 },
    "medicationTolerance": "terrible"
  }, {
    "id": "e4ffe32c-0243-4b74-8145-08236c6d3cd9",
    "patientId": "c0507f23-6f03-4472-905b-ec050f7f04fc",
    "visitTime": "2022-03-19 09:19:23",
    "administrationLocation": "inhome",
    "location": "949 Cedar St, SomeCity, SomeState, 52713",
    "administeringNurse": "Kevin Moore",
    "medication": "Lisinopril",
    "visitDurationSeconds": 4524,
    "biologicalData": { "heartRateBPM": 97, "bloodPressure": "125/73", "painLevel": 2 },
    "medicationTolerance": "good"
  }, {
    "id": "06a82500-a8c0-4fdb-b7db-94959db07c52",
    "patientId": "c0507f23-6f03-4472-905b-ec050f7f04fc",
    "visitTime": "2022-11-08 22:58:48",
    "administrationLocation": "hospital",
    "location": "627 Oak St, HospitalCity, HospitalState, 80812",
    "administeringNurse": "Liam Walker",
    "medication": "Metformin",
    "visitDurationSeconds": 6409,
    "biologicalData": { "heartRateBPM": 92, "bloodPressure": "115/69", "painLevel": 8 },
    "medicationTolerance": "great"
  },
  {
    "id": "7677acba-e76c-4fc3-8fd3-342d98830e08",
    "patientId": "529003b4-87d7-447f-88fa-b2c32e16e0f9",
    "visitTime": "2022-01-27 18:47:20",
    "administrationLocation": "inhome",
    "location": "678 Cedar St, SomeCity, SomeState, 33585",
    "administeringNurse": "Kevin Moore",
    "medication": "Lisinopril",
    "visitDurationSeconds": 9055,
    "biologicalData": { "heartRateBPM": 63, "bloodPressure": "100/82", "painLevel": 10 },
    "medicationTolerance": "good"
  }, {
    "id": "6bddb02e-e8ad-4582-a7fd-33c9bffd3794",
    "patientId": "529003b4-87d7-447f-88fa-b2c32e16e0f9",
    "visitTime": "2022-05-03 08:48:21",
    "administrationLocation": "inhome",
    "location": "678 Cedar St, SomeCity, SomeState, 33585",
    "administeringNurse": "Kevin Moore",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 7256,
    "biologicalData": { "heartRateBPM": 95, "bloodPressure": "108/86", "painLevel": 2 },
    "medicationTolerance": "good"
  }, {
    "id": "85ed98e7-2e22-4fdc-8d51-f3b30dbd9136",
    "patientId": "529003b4-87d7-447f-88fa-b2c32e16e0f9",
    "visitTime": "2022-05-28 16:06:38",
    "administrationLocation": "hospital",
    "location": "904 Oak St, HospitalCity, HospitalState, 47334",
    "administeringNurse": "Sophia Young",
    "medication": "Albuterol",
    "visitDurationSeconds": 5088,
    "biologicalData": { "heartRateBPM": 98, "bloodPressure": "136/88", "painLevel": 3 },
    "medicationTolerance": "terrible"
  }, {
    "id": "33e377a9-cdb1-4697-a880-42532123679b",
    "patientId": "529003b4-87d7-447f-88fa-b2c32e16e0f9",
    "visitTime": "2022-11-20 01:49:26",
    "administrationLocation": "inhome",
    "location": "678 Cedar St, SomeCity, SomeState, 33585",
    "administeringNurse": "Sophia Young",
    "medication": "Lisinopril",
    "visitDurationSeconds": 3547,
    "biologicalData": { "heartRateBPM": 89, "bloodPressure": "105/84", "painLevel": 0 },
    "medicationTolerance": "neutral"
  }, {
    "id": "21e1d597-aaa6-4a58-939c-10f9082f34f0",
    "patientId": "529003b4-87d7-447f-88fa-b2c32e16e0f9",
    "visitTime": "2022-02-15 03:03:00",
    "administrationLocation": "hospital",
    "location": "408 Cedar St, HospitalCity, HospitalState, 95143",
    "administeringNurse": "Sophia Young",
    "medication": "Metformin",
    "visitDurationSeconds": 6905,
    "biologicalData": { "heartRateBPM": 94, "bloodPressure": "105/75", "painLevel": 2 },
    "medicationTolerance": "great"
  }, {
    "id": "5dde6f05-344c-499b-82df-1533cffeecc7",
    "patientId": "529003b4-87d7-447f-88fa-b2c32e16e0f9",
    "visitTime": "2023-07-10 01:27:18",
    "administrationLocation": "hospital",
    "location": "606 Maple St, HospitalCity, HospitalState, 36972",
    "administeringNurse": "Sophia Young",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 4381,
    "biologicalData": { "heartRateBPM": 91, "bloodPressure": "109/82", "painLevel": 0 },
    "medicationTolerance": "great"
  }, {
    "id": "63ee47aa-a41d-49a5-9f65-f9e5a5567d2a",
    "patientId": "529003b4-87d7-447f-88fa-b2c32e16e0f9",
    "visitTime": "2022-05-28 21:39:49",
    "administrationLocation": "inhome",
    "location": "678 Cedar St, SomeCity, SomeState, 33585",
    "administeringNurse": "Nancy Clark",
    "medication": "Metformin",
    "visitDurationSeconds": 7842,
    "biologicalData": { "heartRateBPM": 74, "bloodPressure": "109/87", "painLevel": 2 },
    "medicationTolerance": "good"
  }, {
    "id": "c7a8da9d-8bea-4bbb-83de-fa98a000581b",
    "patientId": "141bb0fa-38fe-46c1-a9ff-482dccfb76e6",
    "visitTime": "2023-05-09 06:10:06",
    "administrationLocation": "inhome",
    "location": "158 Pine St, SomeCity, SomeState, 47420",
    "administeringNurse": "Sophia Young",
    "medication": "Metformin",
    "visitDurationSeconds": 4894,
    "biologicalData": { "heartRateBPM": 78, "bloodPressure": "136/70", "painLevel": 9 },
    "medicationTolerance": "good"
  }, {
    "id": "1f31a794-553b-43c3-96e2-2b0a3bbf9abb",
    "patientId": "141bb0fa-38fe-46c1-a9ff-482dccfb76e6",
    "visitTime": "2023-01-27 11:04:39",
    "administrationLocation": "hospital",
    "location": "676 Main St, HospitalCity, HospitalState, 87956",
    "administeringNurse": "Rachel Lewis",
    "medication": "Lisinopril",
    "visitDurationSeconds": 6423,
    "biologicalData": { "heartRateBPM": 61, "bloodPressure": "108/90", "painLevel": 9 },
    "medicationTolerance": "good"
  }, {
    "id": "5dec4605-1f0a-4a28-b44c-369230d9e4d2",
    "patientId": "141bb0fa-38fe-46c1-a9ff-482dccfb76e6",
    "visitTime": "2023-02-13 12:20:09",
    "administrationLocation": "inhome",
    "location": "158 Pine St, SomeCity, SomeState, 47420",
    "administeringNurse": "Kevin Moore",
    "medication": "Metformin",
    "visitDurationSeconds": 7647,
    "biologicalData": { "heartRateBPM": 90, "bloodPressure": "104/90", "painLevel": 0 },
    "medicationTolerance": "neutral"
  }, {
    "id": "fdafe463-6a22-449f-90df-722d1ae946eb",
    "patientId": "141bb0fa-38fe-46c1-a9ff-482dccfb76e6",
    "visitTime": "2023-01-12 02:13:55",
    "administrationLocation": "inhome",
    "location": "158 Pine St, SomeCity, SomeState, 47420",
    "administeringNurse": "Kevin Moore",
    "medication": "Albuterol",
    "visitDurationSeconds": 7173,
    "biologicalData": { "heartRateBPM": 97, "bloodPressure": "129/84", "painLevel": 7 },
    "medicationTolerance": "bad"
  }, {
    "id": "0589d5ea-d53b-4ef7-bc60-a12cd7ed03df",
    "patientId": "141bb0fa-38fe-46c1-a9ff-482dccfb76e6",
    "visitTime": "2023-12-01 20:08:49",
    "administrationLocation": "inhome",
    "location": "158 Pine St, SomeCity, SomeState, 47420",
    "administeringNurse": "Sophia Young",
    "medication": "Lisinopril",
    "visitDurationSeconds": 5970,
    "biologicalData": { "heartRateBPM": 93, "bloodPressure": "100/81", "painLevel": 10 },
    "medicationTolerance": "terrible"
  }, {
    "id": "95ff49b9-140a-46bb-9ffe-cae724734621",
    "patientId": "141bb0fa-38fe-46c1-a9ff-482dccfb76e6",
    "visitTime": "2022-06-07 09:28:12",
    "administrationLocation": "inhome",
    "location": "158 Pine St, SomeCity, SomeState, 47420",
    "administeringNurse": "Sophia Young",
    "medication": "Lisinopril",
    "visitDurationSeconds": 7156,
    "biologicalData": { "heartRateBPM": 67, "bloodPressure": "105/65", "painLevel": 1 },
    "medicationTolerance": "good"
  }, {
    "id": "e98c20c5-3ef4-4b3a-8291-f5479dd276bd",
    "patientId": "141bb0fa-38fe-46c1-a9ff-482dccfb76e6",
    "visitTime": "2022-02-09 07:33:51",
    "administrationLocation": "inhome",
    "location": "158 Pine St, SomeCity, SomeState, 47420",
    "administeringNurse": "Rachel Lewis",
    "medication": "Albuterol",
    "visitDurationSeconds": 9823,
    "biologicalData": { "heartRateBPM": 70, "bloodPressure": "123/74", "painLevel": 1 },
    "medicationTolerance": "terrible"
  }, {
    "id": "be91cd76-301d-4c6b-883d-2afd0747cd5a",
    "patientId": "7aa03b57-3c03-4484-9907-3607a718cc0b",
    "visitTime": "2023-08-11 10:45:35",
    "administrationLocation": "inhome",
    "location": "919 Maple St, SomeCity, SomeState, 91999",
    "administeringNurse": "Rachel Lewis",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 4783,
    "biologicalData": { "heartRateBPM": 78, "bloodPressure": "137/90", "painLevel": 8 },
    "medicationTolerance": "good"
  }, {
    "id": "d1278b21-5d85-4b0d-827f-fbedb044a051",
    "patientId": "7aa03b57-3c03-4484-9907-3607a718cc0b",
    "visitTime": "2022-01-23 18:55:59",
    "administrationLocation": "inhome",
    "location": "919 Maple St, SomeCity, SomeState, 91999",
    "administeringNurse": "Rachel Lewis",
    "medication": "Albuterol",
    "visitDurationSeconds": 5146,
    "biologicalData": { "heartRateBPM": 66, "bloodPressure": "115/80", "painLevel": 10 },
    "medicationTolerance": "neutral"
  }, {
    "id": "041a801a-fab6-4273-a358-430ddfd3eaaf",
    "patientId": "7aa03b57-3c03-4484-9907-3607a718cc0b",
    "visitTime": "2023-08-26 21:27:44",
    "administrationLocation": "hospital",
    "location": "327 Oak St, HospitalCity, HospitalState, 55937",
    "administeringNurse": "Kevin Moore",
    "medication": "Metformin",
    "visitDurationSeconds": 7471,
    "biologicalData": { "heartRateBPM": 86, "bloodPressure": "128/86", "painLevel": 8 },
    "medicationTolerance": "bad"
  }, {
    "id": "edcef06e-6adc-4a5d-b15e-fdf5325877a6",
    "patientId": "7aa03b57-3c03-4484-9907-3607a718cc0b",
    "visitTime": "2022-08-12 19:02:03",
    "administrationLocation": "hospital",
    "location": "612 Cedar St, HospitalCity, HospitalState, 24969",
    "administeringNurse": "Rachel Lewis",
    "medication": "Albuterol",
    "visitDurationSeconds": 6593,
    "biologicalData": { "heartRateBPM": 93, "bloodPressure": "129/78", "painLevel": 10 },
    "medicationTolerance": "neutral"
  }, {
    "id": "fae72c3f-ecae-4692-b535-e2082aad713c",
    "patientId": "7aa03b57-3c03-4484-9907-3607a718cc0b",
    "visitTime": "2023-05-17 03:02:46",
    "administrationLocation": "inhome",
    "location": "919 Maple St, SomeCity, SomeState, 91999",
    "administeringNurse": "Kevin Moore",
    "medication": "Albuterol",
    "visitDurationSeconds": 8184,
    "biologicalData": { "heartRateBPM": 69, "bloodPressure": "139/83", "painLevel": 5 },
    "medicationTolerance": "good"
  }, {
    "id": "cedf4ad2-52a6-4a59-a64a-643ed4dda35b",
    "patientId": "7aa03b57-3c03-4484-9907-3607a718cc0b",
    "visitTime": "2023-01-21 12:33:40",
    "administrationLocation": "inhome",
    "location": "919 Maple St, SomeCity, SomeState, 91999",
    "administeringNurse": "Sophia Young",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 4142,
    "biologicalData": { "heartRateBPM": 67, "bloodPressure": "129/63", "painLevel": 5 },
    "medicationTolerance": "terrible"
  }, {
    "id": "a332c7e2-bee0-4fd0-832a-9e59ef59182f",
    "patientId": "7aa03b57-3c03-4484-9907-3607a718cc0b",
    "visitTime": "2022-10-28 09:36:09",
    "administrationLocation": "hospital",
    "location": "924 Pine St, HospitalCity, HospitalState, 19259",
    "administeringNurse": "Nancy Clark",
    "medication": "Albuterol",
    "visitDurationSeconds": 9468,
    "biologicalData": { "heartRateBPM": 63, "bloodPressure": "131/79", "painLevel": 3 },
    "medicationTolerance": "neutral"
  }, {
    "id": "ef3a704e-05d4-482c-9603-8ae16705dff0",
    "patientId": "1f1c21ec-b230-4b97-9ae6-83e661900178",
    "visitTime": "2022-01-02 06:49:21",
    "administrationLocation": "inhome",
    "location": "784 Main St, SomeCity, SomeState, 58700",
    "administeringNurse": "Liam Walker",
    "medication": "Amlodipine",
    "visitDurationSeconds": 4756,
    "biologicalData": { "heartRateBPM": 78, "bloodPressure": "120/74", "painLevel": 4 },
    "medicationTolerance": "neutral"
  }, {
    "id": "60b6a8c1-206e-4c28-9463-7779a24714ce",
    "patientId": "1f1c21ec-b230-4b97-9ae6-83e661900178",
    "visitTime": "2022-08-18 10:02:54",
    "administrationLocation": "hospital",
    "location": "884 Maple St, HospitalCity, HospitalState, 67742",
    "administeringNurse": "Rachel Lewis",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 5767,
    "biologicalData": { "heartRateBPM": 92, "bloodPressure": "128/62", "painLevel": 10 },
    "medicationTolerance": "neutral"
  }, {
    "id": "6d9a71bc-8bb2-4ae2-9a39-a88592777a1d",
    "patientId": "1f1c21ec-b230-4b97-9ae6-83e661900178",
    "visitTime": "2022-11-06 15:19:50",
    "administrationLocation": "hospital",
    "location": "755 Cedar St, HospitalCity, HospitalState, 66775",
    "administeringNurse": "Liam Walker",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 5288,
    "biologicalData": { "heartRateBPM": 65, "bloodPressure": "122/79", "painLevel": 1 },
    "medicationTolerance": "great"
  }, {
    "id": "6ff03d42-9382-4b98-8f2a-507ed3f292eb",
    "patientId": "1f1c21ec-b230-4b97-9ae6-83e661900178",
    "visitTime": "2022-01-27 06:30:28",
    "administrationLocation": "inhome",
    "location": "784 Main St, SomeCity, SomeState, 58700",
    "administeringNurse": "Sophia Young",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 7975,
    "biologicalData": { "heartRateBPM": 71, "bloodPressure": "138/80", "painLevel": 2 },
    "medicationTolerance": "good"
  }, {
    "id": "62a6867f-f795-430a-bb0e-bd99d901592f",
    "patientId": "1f1c21ec-b230-4b97-9ae6-83e661900178",
    "visitTime": "2022-03-03 23:01:39",
    "administrationLocation": "hospital",
    "location": "156 Cedar St, HospitalCity, HospitalState, 39117",
    "administeringNurse": "Kevin Moore",
    "medication": "Atorvastatin",
    "visitDurationSeconds": 9558,
    "biologicalData": { "heartRateBPM": 69, "bloodPressure": "140/79", "painLevel": 9 },
    "medicationTolerance": "bad"
  }, {
    "id": "c7253655-84f3-416c-9525-584805d7654d",
    "patientId": "1f1c21ec-b230-4b97-9ae6-83e661900178",
    "visitTime": "2022-11-03 06:31:33",
    "administrationLocation": "hospital",
    "location": "818 Main St, HospitalCity, HospitalState, 61352",
    "administeringNurse": "Rachel Lewis",
    "medication": "Lisinopril",
    "visitDurationSeconds": 9369,
    "biologicalData": { "heartRateBPM": 75, "bloodPressure": "138/75", "painLevel": 5 },
    "medicationTolerance": "great"
  }, {
    "id": "bde61cf6-ff74-4209-8dc7-dea11ce37ce6",
    "patientId": "1f1c21ec-b230-4b97-9ae6-83e661900178",
    "visitTime": "2022-09-15 15:56:09",
    "administrationLocation": "hospital",
    "location": "131 Main St, HospitalCity, HospitalState, 94493",
    "administeringNurse": "Nancy Clark",
    "medication": "Metformin",
    "visitDurationSeconds": 5021,
    "biologicalData": { "heartRateBPM": 75, "bloodPressure": "135/88", "painLevel": 0 },
    "medicationTolerance": "neutral"
  }
];
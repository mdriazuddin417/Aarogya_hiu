export const fetchDat = [
  {
    _id: "64edaafe9240e1050202554e",
    expiryTime: "2023-09-20T14:21:04Z",
    consentCreatedTime: "2023-08-20T14:21:04Z",
    timestamp: "2023-08-29T08:23:26.523921884",
    patientID: "gautam_1999@sbx",
    consentID: "177736b9-2d77-43c1-b2e4-ded13de8db5f",
    status: "GRANTED",
    requestID: "f1193fbf-ef09-4097-8e2f-5f982b470edb",
    __v: 0,
  },
];

export const hiUConsent = [
  {
    _id: "64edab8e9240e1050202555c",
    consentId: "177736b9-2d77-43c1-b2e4-ded13de8db5f",
    status: "GRANTED",
    patientId: "gautam_1999@sbx",
    careContexts: [
      {
        patientReference: "GR12349",
        careContextReference: "GRREF",
      },
      {
        patientReference: "GR12349",
        careContextReference: "visit-test25",
      },
      {
        patientReference: "GR12349",
        careContextReference: "GRREF12",
      },
      {
        patientReference: "GR12349",
        careContextReference: "visit-test",
      },
      {
        patientReference: "GR12349",
        careContextReference: "GRREF",
      },
      {
        patientReference: "GR12349",
        careContextReference: "visit-test2",
      },
      {
        patientReference: "GR12349",
        careContextReference: "GRREF",
      },
      {
        patientReference: "GR12349",
        careContextReference: "GRREF127",
      },
      {
        patientReference: "GR12349",
        careContextReference: "GRREF1270",
      },
    ],
    hipId: "arogyaId-facility",
    __v: 0,
  },
];

export const healthDetails = {
  _id: {
    $oid: "650006677caf0a16af27fd72",
  },
  consentID: "df64c8e4-1ace-4af4-bcea-768ef156bc93",
  documentTitle: "Prescription",
  patientInfo: {
    name: "test",
    gender: "male",
    birthDate: "2022-02-12",
  },
  practitioners: [
    {
      id: "123",
      name: "Mr.doctor12",
    },
  ],
  medications: [
    {
      medication: "PCM12345",
      dosageInstruction: "2 times a day twice",
      doctorName: "Mr.doctor12",
      doctorId: "Practitioner/123",
      authoredDate: "2023-09-13",
    },
  ],
  __v: 0,
};

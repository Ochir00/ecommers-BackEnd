// _id: string;
// name: string;
// email: string;
// password: string;
// role: "customer" | "admin";
//   address?: {
//     street?: string;
//     city?: string;
//     zip?: string;
//   };
// createdAt: Date;
// updatedAt: Date;
const Users = [
  {
    _id: "1",
    name: "ochrioo",
    email: "admin@gmail.com",
    password: "11112222",
    role: "admin",
    address: {
      street: "a",
      city: "a",
      zip: "a",
    },
    createAt: "date",
    updateAt: "date",
  },
  {
    name: "boldoo",
    email: "test@gmail.com",
    password: "12345678",
    address: {
      street: "a",
      city: "a",
      zip: "a",
    },
    _id: 2,
    role: "custon",
    createAt: "2025-02-12T04:28:05.845Z",
    updateAt: "2025-02-12T04:28:05.845Z",
  },
];

module.exports = Users;

const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create Customers, Restaurants and Reservations

  const createCustomers = async () => {
    const customers = [
        { name: "Alisha" },
        { name: "Trish" },
        { name: "Shamira" },
        { name: "Lee" },
    ];

    await prisma.customer.createMany( { data: customers });
  };

  const createRestaurants = async () => {
    const restaurants = [
        { name: "Cafe Reggio" },
        { name: "Artistic Pizza" },
        { name: "Vegan On The Fly" },
    ];
    await prisma.restaurant.createMany( { data: restaurants });
  };
 

 const createReservations = async () => {
    const reservations = [
        { 
            customerId: 1,
            restaurantId: 1,
            date: new Date("2025-07-01"),
            partyCount: 2, 
        },
        { 
            customerId: 2,
            restaurantId: 2,
            date: new Date("2025-07-01"),
            partyCount: 6, 
        },
        { 
            customerId: 3,
            restaurantId: 3,
            date: new Date("2025-07-01"),
            partyCount: 3, 
        },
    ];
    await prisma.reservation.createMany( { data: reservations });
 };

 await createCustomers();
 await createRestaurants();
 await createReservations();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
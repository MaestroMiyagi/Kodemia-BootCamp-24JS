let carsArray = [
  {
    name: "Toledo",
    branch: "Seat",
    year: "2017",
    hp: 125,
    price: 300000,
    presentation: () => {
      console.log("Seat Toledo por tan sólo $300,000 MXN!!!");
    },
  },
  {
    name: "Chevy",
    branch: "Chevrolet",
    year: "2010",
    hp: 125,
    price: 90000,
    presentation: () => {
      console.log("Super chevy!!!")
      },
  }
];

carsArray.forEach((car) => car.presentation());

const getMonthlyPayments = (months) => {
  carsArray.forEach((car) =>
    console.log(`Los pagos mensuales del ${car.branch} ${car.name} serían de de ${car.price / months}`)
  );
}; 

/* const getMonthlyPayments = (months) => {
  carsArray.forEach((item, index, array) => {
    calculateMonthlyPayment(item, months)
  })
} */

getMonthlyPayments(6)
const ticket = [
  { name: "Shampoo", amount: 1, price: 49 },
  { name: "Apple", amount: 10, price: 5 },
  { name: "Eggs", amount: 20, price: 7 },
];
//------------------------------------------------------------------
function create(ticket) {
  const ticketBlock = document.querySelector(".ticket-block");
  document.body.prepend(ticketBlock);

  ticket.forEach((element) => {
    const product = document.createElement("div");
    product.innerHTML = `
    <h2>Name:${element.name}</h2>
    ..........
    <h4>Price:${element.price}</h4>
    <p>Amount:${element.amount}</p>
    `;
    product.style.cssText = `
    display:flex;
    align-items:center;
    gap:10px;
    `;
    ticketBlock.prepend(product);
  });
}

create(ticket);

//--------------------------------------------------------------------

function totalPriceTicket(ticket) {
  let sum = 0;
  ticket.forEach((product) => {
    sum += product.price;
  });
  return sum;
}

console.log(totalPriceTicket(ticket));

//---------------------------------------------------------------------

function maxPriceTicket(ticket) {
  let array = [];
  for (let i = 0; i < ticket.length; i++) {
    array.push(ticket[i].price);
  }
  return Math.max(...array);
}

console.log(maxPriceTicket(ticket));

//----------------------------------------------------------------------
function middlePirceTicket(ticket) {
  return Math.floor(totalPriceTicket(ticket) / ticket.length);
}
console.log(middlePirceTicket(ticket));



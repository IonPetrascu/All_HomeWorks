let shoppingList = [
  { name: "Paine", amount: 2, cumparat: true },
  { name: "Oua", amount: 10, cumparat: false },
  { name: "Rosii", amount: 10, cumparat: true },
  { name: "Mere", amount: 15, cumparat: false },
];

//----------------------------------------------------------------------------

function arrangementShoppingList(list) {
  let result = [];
  list.forEach((product) => {
    product.cumparat ? result.push(product) : result.unshift(product);
  });
  return result;
}

console.log(arrangementShoppingList(shoppingList));

//----------------------------------------------------------------------------

function aquisitionList(nume, cantitate) {
  var index = shoppingList.findIndex((product) => {
    return product.name === nume;
  });

  if (index === -1) {
    shoppingList.push({ name: nume, amount: cantitate, cumparat: false });
  } else {
    shoppingList[index].amount += cantitate;
  }
  return shoppingList;
}

console.log(aquisitionList("Morcov", 3));

//-------------------------------------------------------------------------------
function buyProduct(nume) {
  shoppingList.findIndex((product) => {
    product.name === nume
      ? (product.cumparat = true) 
      : console.log("nu este asa produs");
  });
  return shoppingList
}

console.log(buyProduct("Mere"));

//----------------------------------------------------------------------------------

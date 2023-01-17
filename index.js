// declaring variable
var customerName = 'bob';

//Upper case customer name
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
  }

  //Set Best Customer
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
  //Overwrite Best Customer
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }

  //Declareing Constant
  const leastFavoriteCustomer = 'John';

  // Attempt to change the constant
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Mary';
  }
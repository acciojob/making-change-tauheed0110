const makeChange = (amount) => {
    // your name here
    amount = Number(amount)
    const change = {q:0, d:0, n: 0,p :0}

    // check for the quorters
    change.q = Math.floor(amount/25);
    amount %= 25;
    // check for dimes
    change.d = Math.floor(amount/10);
    amount %= 10;
    // check for the nickles
    change.n = Math.floor(amount/5);
    amount %= 5;
    // now rest is the piny
    change.p= amount;

    return change;

  };
  
//   { q: 1, d: 2, n: 0, p: 2 } 47
  // Do not the change the code below
  const c = prompt("Enter c: ");
  alert(JSON.stringify(makeChange(c)));
  
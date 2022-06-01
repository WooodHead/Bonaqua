function setValue() {
    const size = document.getElementById('mlselect').value.split(',')[0];
    const price = document.getElementById('mlselect').value.split(',')[1];
    const incase = document.getElementById('mlselect').value.split(',')[2];
    const number = document.getElementById('avdar').value;
    const result = document.getElementById('result');
    const title = document.getElementById('title');

    const totals = (incase * price) * number;
    sessionStorage.setItem('total', totals);
    setPrice(totals);
    title.innerHTML = `Bonaqua ${size} - ${price}₮`;
    result.innerHTML = `${totals}₮`;
  }
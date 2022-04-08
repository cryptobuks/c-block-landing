const formatNumber = (number) => new Intl.NumberFormat().format(number);

async function fetchStatistics() {
  const [usersAmountEl, contractsAmountEl] = document.getElementsByClassName('statistics-box__content-amount');
  if (usersAmountEl && contractsAmountEl) {
    const hostname = 'https://devcblock.rocknblock.io/api/v1'
    const url = `${hostname}/platform_statistics`;
    try {
      const res = await fetch(url);
      const { users, contracts } = await res.json();
      usersAmountEl.textContent = formatNumber(users);
      contractsAmountEl.textContent = formatNumber(contracts);
    } catch (err) {
      console.log(err);
    }
  }
}

fetchStatistics();
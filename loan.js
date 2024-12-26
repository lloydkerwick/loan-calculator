document.querySelector('.js-calculate-button').addEventListener('click', () => {
  const p = parseFloat(document.querySelector('.js-loan-amount').value);
  const r = parseFloat(document.querySelector('.js-monthly-rate').value) / 100 / 12;
  const n = parseFloat(document.querySelector('.js-loan-lifetime').value);

  if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
    alert('Please enter valid positive numbers for all fields.');
    return;
  }

  const monthlyRepaymentAmount = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  const totalPaid = monthlyRepaymentAmount * n;
  const totalInterest = totalPaid - p;

  document.querySelector('.js-monthly-repayment').value = monthlyRepaymentAmount.toFixed(2);
  document.querySelector('.js-total-interest').value = totalInterest.toFixed(2);
  document.querySelector('.js-total-paid').value = totalPaid.toFixed(2);
});
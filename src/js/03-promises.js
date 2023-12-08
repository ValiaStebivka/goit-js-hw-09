import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  inputFirstDelay: document.querySelector('[name="delay"]'),
  inputDelayStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  formSubmit: document.querySelector('.form'),
};
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({ position, delay });
  } else {
    return Promise.reject({ position, delay });
  }
}
let firstDelay;
refs.inputFirstDelay.addEventListener('input', event => {
  firstDelay = event.target.value;
});
let delayStep;
refs.inputDelayStep.addEventListener('input', event => {
  delayStep = event.target.value;
});
let amount;
refs.inputAmount.addEventListener('input', event => {
  amount = event.target.value;
});
refs.formSubmit.addEventListener('submit', event => {
  event.preventDefault();
  event.target.reset();
  const amountArr = [];
  for (let i = 1; i <= amount; i += 1) {
    amountArr.push(i);
  }
  amountArr.map(amount => {
    return setTimeout(() => {
      createPromise(amount, Number(firstDelay) + delayStep * (amount - 1))
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, Number(firstDelay) + delayStep * (amount - 1));
  });
});
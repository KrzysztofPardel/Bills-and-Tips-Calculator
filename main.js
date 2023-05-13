//I select the element that I need
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btnCount = document.querySelector('.count');
const result = document.querySelector('.cost-info');
const error = document.querySelector('.error');
const contributionCost = document.querySelector('.cost');

const isFilled = () => {
	const billValue = price.value;
	const amountPeople = people.value;
	const amountTip = tip.value;
	if (billValue === '' || amountPeople === '' || amountTip === '') {
		error.textContent = 'Please fill out all sections.';
		error.style.color = 'red';
	} else {
		countTip(billValue, amountPeople, amountTip);
	}
};

const countTip = (billValue, amountPeople, amountTip) => {
	// const everyonesContribution = Math.round((billValue * (billValue * (1 + amountTip / 100))) / amountPeople);
	if (amountPeople !== 0) {
		const everyonesContribution = Math.round((billValue * (1 + amountTip / 100)) / amountPeople);
		contributionCost.textContent = everyonesContribution;
	} else {
		error.textContent = 'Number of people cannot be zero.';
		error.style.color = 'red';
	}
	const everyonesContribution = Math.round((billValue * (1 + amountTip / 100)) / amountPeople);
	result.textContent = everyonesContribution;
};

const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		isFilled();
	}
};
//I add event listener;

btnCount.addEventListener('click', isFilled);
btnCount.addEventListener('keyup', enterKeyCheck);

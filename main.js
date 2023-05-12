//I select the element that I need
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btnCount = document.querySelector('.count');

const countTip = () => {
	const billValue = price.value;
	const amountPeople = people.value;
	const amountTip = tip.value;

	if (billValue !== null && amountPeople !== null && amountTip !== null) {
        continue;
	} else{

    }
};
//I add event listener;

btnCount.addEventListener('click', countTip);

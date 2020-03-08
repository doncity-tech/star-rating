// Star rating app built by Opara Princewill
//Basic functions
const qs = (elem) => {
	return document.querySelector(elem);
}
const qsAll = (elem) => {
	return document.querySelectorAll(elem);
}

const allStar = ['rate-1','rate-2','rate-3','rate-4','rate-5'];

//Add Star Rating
let getStar = -1;

const correntRate = (num) => {
	allStar.forEach((x) => {
		qs(`#${x}`).style.color = "#d6d6d6";
	});

	for(let i = 0; i < num; i++) {
		qs(`#${allStar[i]}`).style.color = "orange";
	}
}

const renderRate = (num) => {
	for(let i = 0; i < num; i++) {
		qs(`#${allStar[i]}`).style.color = "orange";
	}
}

const removeRate = (num) => {
	for(let i = num - 1; i > -1; i--) {								
		if(getStar <= i) {
			qs(`#${allStar[i]}`).style.color = "#d6d6d6";
		}				
	}			
}

(() => {
	allStar.forEach((x) => {
		qs(`#${x}`).addEventListener('mouseover', (e) => {
			let id = e.target.getAttribute('id').split('-')[1];	
			renderRate(id);
		});
	});

	allStar.forEach((x) => {
		qs(`#${x}`).addEventListener('mouseleave', (e) => {
			let id = e.target.getAttribute('id').split('-')[1];	
			removeRate(id);
		});
	});

	allStar.forEach((x) => {
		qs(`#${x}`).addEventListener('click', (e) => {
			let id = e.target.getAttribute('id').split('-')[1];
			let rateValue = e.target.nextSibling.textContent;
			getStar = id;
			qs('#s-value').textContent = `= ${id} ${rateValue}`;
			correntRate(id);	
		});
	});
	
	qs('.clear-btn').addEventListener('click', () => {
		allStar.forEach((x) => {
			qs(`#${x}`).style.color = "#d6d6d6";
		});
		getStar = -1;
		qs('#s-value').textContent = "";
	})
})();


// Star rating app built by Opara Princewill.
// You can contribute.
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

// Get the current rating when you click on the star
const correntRate = (num) => {
	// Remove all the rating
	allStar.forEach((x) => {
		qs(`#${x}`).style.color = "#d6d6d6";
	});

	// Rate the stars less than the clicked value
	for(let i = 0; i < num; i++) {
		qs(`#${allStar[i]}`).style.color = "orange";
	}
}

// color the stars on hover
const renderRate = (num) => {
	for(let i = 0; i < num; i++) {
		qs(`#${allStar[i]}`).style.color = "orange";
	}
}

// Remove colored star on mouseleave except the current rating
const removeRate = (num) => {
	for(let i = num - 1; i > -1; i--) {								
		if(getStar <= i) {
			qs(`#${allStar[i]}`).style.color = "#d6d6d6";
		}				
	}			
}

(() => {
	// Mouseover event
	allStar.forEach((x) => {
		qs(`#${x}`).addEventListener('mouseover', (e) => {
			let id = e.target.getAttribute('id').split('-')[1];	
			renderRate(id);
		});
	});

	// Mouseleave event
	allStar.forEach((x) => {
		qs(`#${x}`).addEventListener('mouseleave', (e) => {
			let id = e.target.getAttribute('id').split('-')[1];	
			removeRate(id);
		});
	});

	// Mouse click event
	allStar.forEach((x) => {
		qs(`#${x}`).addEventListener('click', (e) => {
			let id = e.target.getAttribute('id').split('-')[1]; // get value
			let rateValue = e.target.nextSibling.textContent; // get rate text
			getStar = id;
			qs('#s-value').textContent = `= ${id} ${rateValue}`; // display rating
			correntRate(id);	
		});
	});
	
	// Clear all ratings
	qs('.clear-btn').addEventListener('click', () => {
		allStar.forEach((x) => {
			qs(`#${x}`).style.color = "#d6d6d6";
		});
		getStar = -1;
		qs('#s-value').textContent = "";
	})
})();


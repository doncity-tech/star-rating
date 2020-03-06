//Basic functions
const qs = (elem) => {
	return document.querySelector(elem);
}
const qsAll = (elem) => {
	return document.querySelectorAll(elem);
}

//Add Star Rating
let getStar = -1;
qs('#rating').addEventListener('mouseover', (e) => {
	const renderRate = (num) => {
		let allStar = ['rate-1','rate-2','rate-3','rate-4','rate-5'];
		for(let i = 0; i < num; i++) {
			qs(`#${allStar[i]}`).style.color = "orange";
		}
	}

	if(e.target.nodeName === 'I') {
		let id = e.target.getAttribute('id').split('-')[1];
		renderRate(id);
	}
});

qs('#rating').addEventListener('click', (e) => {	
	const correntRate = (num) => {		
		let allStar = ['rate-1','rate-2','rate-3','rate-4','rate-5'];
		allStar.forEach((x) => {
			qs(`#${x}`).style.color = "#d6d6d6";
		});

		for(let i = 0; i < num; i++) {
			qs(`#${allStar[i]}`).style.color = "orange";
		}
	}

	if(e.target.nodeName === 'I') {
		let id = e.target.getAttribute('id').split('-')[1];
        getStar = id;
        qs('#s-value').textContent = id;
		correntRate(id);		
	}
});


(() => {
	let allStar = ['rate-1','rate-2','rate-3','rate-4','rate-5'];
	const removeRate = (num) => {
		for(let i = num - 1; i > -1; i--) {								
			if(getStar <= i) {
				qs(`#${allStar[i]}`).style.color = "#d6d6d6";
			}				
		}			
	}
	
	for(let i = 0; i < 5; i++) {
		qs(`#${allStar[i]}`).addEventListener('mouseleave', (e) => {
			let id = e.target.getAttribute('id').split('-')[1];	
			removeRate(id);
		});
	}
})();

qs('.clear-btn').addEventListener('click', () => {
    let allStar = ['rate-1','rate-2','rate-3','rate-4','rate-5'];
    allStar.forEach((x) => {
        qs(`#${x}`).style.color = "#d6d6d6";
    });
    getStar = -1;
    qs('#s-value').textContent = "";
})
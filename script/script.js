let product_catalogue_page = 1;
let review_page = 1;
// let review_right_arrow;
// let review_left_arrow;
const left_active_arrow = document.getElementById('left_active_arrow');
const left_inactive_arrow = document.getElementById('left_inactive_arrow');
const right_active_arrow = document.getElementById('right_active_arrow');
const right_inactive_arrow = document.getElementById('right_inactive_arrow');
const active_elipses = document.querySelectorAll('#pagination_ellipse_active');
const inactive_elipses = document.querySelectorAll('#pagination_ellipse_inactive');
let review_pagination = document.getElementById('review_pagination');


function pagination_right () {
	active_elipses[product_catalogue_page-1].classList.add('invisible');
	inactive_elipses[product_catalogue_page-1].classList.remove('invisible');
	active_elipses[product_catalogue_page].classList.remove('invisible');
	inactive_elipses[product_catalogue_page].classList.add('invisible');
	product_catalogue_page++;
	if (product_catalogue_page == 2) {
		left_active_arrow.classList.remove('invisible');
		left_inactive_arrow.classList.add('invisible');	
	} else if (product_catalogue_page == 5) {
		right_inactive_arrow.classList.remove('invisible');
		right_active_arrow.classList.add('invisible');
	}
}
function pagination_left () {
	active_elipses[product_catalogue_page-1].classList.add('invisible');
	inactive_elipses[product_catalogue_page-1].classList.remove('invisible');
	active_elipses[product_catalogue_page-2].classList.remove('invisible');
	inactive_elipses[product_catalogue_page-2].classList.add('invisible');
	product_catalogue_page--;
	if (product_catalogue_page == 4) {
		right_inactive_arrow.classList.add('invisible');
		right_active_arrow.classList.remove('invisible');
	} else if (product_catalogue_page == 1) {
		left_active_arrow.classList.add('invisible');
		left_inactive_arrow.classList.remove('invisible');
	}
}		
right_active_arrow.addEventListener('click', pagination_right);
left_active_arrow.addEventListener('click', pagination_left);

function create_review_pagination() {
	const fragment = document.createDocumentFragment();
	
	for (let i = 0; i <= 6; i++) {
		if (i == 0) {
			const arrow = document.createElement('img');
			if (review_page == 1) {
				arrow.src = "images/Arrow_2.png";
				arrow.classList.add('catalogue_pagination_arrow');
				arrow.id = 'review_left_arrow';
				fragment.appendChild(arrow);
			} else {
				arrow.src = "images/Arrow_1.png";
				arrow.classList.add('catalogue_pagination_left_arrow_active');
				arrow.id = 'review_left_arrow';
				fragment.appendChild(arrow);
				}
		} else if (i == 6) {
			const arrow = document.createElement('img');
			if (review_page == 5) {
				arrow.src = "images/Arrow_2.png";
				arrow.classList.add('catalogue_pagination_right_arrow_inactive');
				arrow.id = 'review_right_arrow';
				fragment.appendChild(arrow);
			} else {
				arrow.src = "images/Arrow_1.png";
				arrow.classList.add('catalogue_pagination_arrow');
				arrow.id = 'review_right_arrow';
				fragment.appendChild(arrow);
				}
		} else {
			const elipse = document.createElement('img');
			if (i == review_page) {
				elipse.src = "images/Ellipse_1.png";
				elipse.classList.add('catalogue_pagination_ellipse');
				fragment.appendChild(elipse);
			} else {
				elipse.src = "images/Ellipse_2.png";
				elipse.classList.add('catalogue_pagination_ellipse');
				fragment.appendChild(elipse);
				}
			}
		}
	return fragment
	}

function reviwe_pagination_right() {
	if (review_page < 5) {
		review_page++;
		review_pagination.innerHTML = '';
		review_pagination.appendChild(create_review_pagination());
		review_right_arrow = document.getElementById('review_right_arrow');
		review_right_arrow.addEventListener('click', reviwe_pagination_right);
		review_left_arrow = document.getElementById('review_left_arrow');
		review_left_arrow.addEventListener('click', reviwe_pagination_left);
		}
	}
function reviwe_pagination_left() {
	if (review_page > 1) {
		review_page--;
		review_pagination.innerHTML = '';
		review_pagination.appendChild(create_review_pagination());
		review_right_arrow = document.getElementById('review_right_arrow');
		review_right_arrow.addEventListener('click', reviwe_pagination_right);
		review_left_arrow = document.getElementById('review_left_arrow');
		review_left_arrow.addEventListener('click', reviwe_pagination_left);
		}
	}	
review_pagination.appendChild(create_review_pagination());
let review_right_arrow = document.getElementById('review_right_arrow');
let review_left_arrow = document.getElementById('review_left_arrow');
review_right_arrow.addEventListener('click', reviwe_pagination_right);
review_left_arrow.addEventListener('click', reviwe_pagination_left);
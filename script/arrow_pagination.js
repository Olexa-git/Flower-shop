import { catalogue } from './catalogue.js';
import { reviews } from './reviews.js';
let product_catalogue = catalogue.slice();
let product_catalogue_page = 1;
let review_page = 1;
const catalogue_left_active_arrow = document.getElementById('left_active_arrow');
const catalogue_left_inactive_arrow = document.getElementById('left_inactive_arrow');
const catalogue_right_active_arrow = document.getElementById('right_active_arrow');
const catalogue_right_inactive_arrow = document.getElementById('right_inactive_arrow');
const catalogue_active_elipses = document.querySelectorAll('#pagination_ellipse_active');
const catalogue_inactive_elipses = document.querySelectorAll('#pagination_ellipse_inactive');
let review_pagination = document.getElementById('review_pagination');
let review_right_arrow;
let review_left_arrow;

const catalogue_items_list = document.getElementById('catalogue_items_list');
const client_reviews = document.getElementById('client_reviews');

export function catalogue_pagination_right () {
	catalogue_active_elipses[product_catalogue_page-1].classList.add('invisible');
	catalogue_inactive_elipses[product_catalogue_page-1].classList.remove('invisible');
	catalogue_active_elipses[product_catalogue_page].classList.remove('invisible');
	catalogue_inactive_elipses[product_catalogue_page].classList.add('invisible');
	product_catalogue_page++;
	create_catalogue_page(product_catalogue_page);
	if (product_catalogue_page == 2) {
		catalogue_left_active_arrow.classList.remove('invisible');
		catalogue_left_inactive_arrow.classList.add('invisible');	
	} else if (product_catalogue_page == 5) {
		catalogue_right_inactive_arrow.classList.remove('invisible');
		catalogue_right_active_arrow.classList.add('invisible');
	}
};

export function catalogue_pagination_left() {
	catalogue_active_elipses[product_catalogue_page-1].classList.add('invisible');
	catalogue_inactive_elipses[product_catalogue_page-1].classList.remove('invisible');
	catalogue_active_elipses[product_catalogue_page-2].classList.remove('invisible');
	catalogue_inactive_elipses[product_catalogue_page-2].classList.add('invisible');
	product_catalogue_page--;
	create_catalogue_page(product_catalogue_page);
	if (product_catalogue_page == 4) {
		catalogue_right_inactive_arrow.classList.add('invisible');
		catalogue_right_active_arrow.classList.remove('invisible');
	} else if (product_catalogue_page == 1) {
		catalogue_left_active_arrow.classList.add('invisible');
		catalogue_left_inactive_arrow.classList.remove('invisible');
	}
};

function catalogue_first_page () {
	for (let i = 0; i<=4; i++) {
		catalogue_active_elipses[i].classList.add('invisible');
		catalogue_inactive_elipses[i].classList.remove('invisible');
	}
	catalogue_active_elipses[0].classList.remove('invisible');
	catalogue_inactive_elipses[0].classList.add('invisible');
	catalogue_right_inactive_arrow.classList.add('invisible');
	catalogue_right_active_arrow.classList.remove('invisible');
	catalogue_left_active_arrow.classList.add('invisible');
	catalogue_left_inactive_arrow.classList.remove('invisible');
};

export function create_review_pagination() {
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
export function reviwe_pagination_right() {
	if (review_page < 5) {
		review_page++;
		review_pagination.innerHTML = '';
		review_pagination.appendChild(create_review_pagination());
		review_right_arrow = document.getElementById('review_right_arrow');
		review_right_arrow.addEventListener('click', reviwe_pagination_right);
		review_left_arrow = document.getElementById('review_left_arrow');
		review_left_arrow.addEventListener('click', reviwe_pagination_left);
		}
		create_client_reviews();
	}
export function reviwe_pagination_left() {
	if (review_page > 1) {
		review_page--;
		review_pagination.innerHTML = '';
		review_pagination.appendChild(create_review_pagination());
		review_right_arrow = document.getElementById('review_right_arrow');
		review_right_arrow.addEventListener('click', reviwe_pagination_right);
		review_left_arrow = document.getElementById('review_left_arrow');
		review_left_arrow.addEventListener('click', reviwe_pagination_left);
		}
		create_client_reviews();
	}

function create_catalogue_item(cat_item) {
	const template = document.createElement('template');
	const item = `<div class="catalogue_item">
				  <img src="${cat_item.image}">
				  <p>${cat_item.title}<br>
				  ${cat_item.description}</p>
				  <p>${cat_item.price}</p>
				  <button class="catalogue_in_basket">Add to basket</button>
				  </div>`;
	template.innerHTML = item;
	return template.content;
}

function create_catalogue_page (page) {
	catalogue_items_list.innerHTML = '';
	if (page == 1) {
		if (product_catalogue.length >= 6) {
			for (let i=0; i<6; i++) {
				catalogue_items_list.appendChild(create_catalogue_item(product_catalogue[i]));
				}
		} else {
			for (let i=0; i<product_catalogue.length; i++) {
				catalogue_items_list.appendChild(create_catalogue_item(product_catalogue[i]));
				}
		}
	} else {
		let first_item = (page-1)*2;
		if (product_catalogue.slice(first_item).length >= 6) {	
			for (let i=first_item; i<first_item+6; i++) {
				catalogue_items_list.appendChild(create_catalogue_item(product_catalogue[i]));
				}
		} else {
			for (let i=first_item; i<first_item+product_catalogue.slice(first_item).length; i++) {
				catalogue_items_list.appendChild(create_catalogue_item(product_catalogue[i]));
				}
		}
	}	
};
// function create_catalogue_page (page) {
// 	catalogue_items_list.innerHTML = '';
// 	if (page == 1) {
// 		for (let i=0; i<6; i++) {
// 			catalogue_items_list.appendChild(create_catalogue_item(product_catalogue[i]));
// 		}
// 	} else {
// 		let first_item = (page-1)*2;
// 		for (let i=first_item; i<first_item+6; i++) {
// 			catalogue_items_list.appendChild(create_catalogue_item(product_catalogue[i]));
// 			}
// 		}
// 	};

function create_review_item(rew_item, cart_num) {
	const template = document.createElement('template');	
	const item = `<div class="review_cart${cart_num}">
						<img src="${rew_item.image}">
						<div class="review">
							<p class="review_content">“${rew_item.review_text}”</p>
							<div class="review_line"></div>
							<div class="review_name">
								<p>${rew_item.name}</p>
								<p>${rew_item.date}</p>
							</div>
						</div>`;
	template.innerHTML = item;
	return template.content;
}
function create_client_reviews() {
	client_reviews.innerHTML = '';
	client_reviews.appendChild(create_review_item(reviews[review_page-1], 1));
	client_reviews.appendChild(create_review_item(reviews[review_page], 2));
}
create_catalogue_page(product_catalogue_page);
create_client_reviews();

export function search_in_catalogue() {
	product_catalogue = [];
	for (let i = 0; i<catalogue.length; i++){
		if (search_engine(catalogue[i]) == 1) {
			product_catalogue.push(catalogue[i]);
		}
	}
	product_catalogue_page = 1;
	create_catalogue_page(product_catalogue_page);
	catalogue_first_page();
};

function search_engine(value) {
	if ((value.title.toLowerCase().search(search_field.value.toLowerCase())) >= 0) {
		return 1;
	} else if ((value.description.toLowerCase().search(search_field.value.toLowerCase())) >= 0) {
		return 1;
	};
};

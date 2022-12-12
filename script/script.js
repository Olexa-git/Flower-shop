// import { pagination_right } from './arrow_pagination.js'; // Import of single function by name
import * as paginator from './arrow_pagination.js'; // Import of all functions in file
import { catalogue } from './catalogue.js';

const navigation_lupa = document.getElementById('navigation_lupa');
const header = document.getElementById('header');
const search_field = document.getElementById('search_field');
const search_button = document.getElementById('search_button');
const btn_in_catalogue_first_section = document.getElementById('in_catalogue_first_section');
export const catalogue_anchor = document.getElementById('anchor_for_href_cataloge');
const bouquets_button = document.getElementById('bouquets_button');
const fresh_flowers = document.getElementById('fresh_flowers');
const your_bouquet = document.getElementById('your_bouquet');
const burger_menu = document.getElementById('header_burger_menu');

right_active_arrow.addEventListener('click', paginator.catalogue_pagination_right);
left_active_arrow.addEventListener('click', paginator.catalogue_pagination_left);

review_pagination.appendChild(paginator.create_review_pagination());
let review_right_arrow = document.getElementById('review_right_arrow');
let review_left_arrow = document.getElementById('review_left_arrow');
review_right_arrow.addEventListener('click', paginator.reviwe_pagination_right);
review_left_arrow.addEventListener('click', paginator.reviwe_pagination_left);

navigation_lupa.addEventListener('click', show_search);
search_button.addEventListener('click', paginator.search_in_catalogue);

function show_search() {
	search_field.classList.toggle('search_field_show');
	search_button.classList.toggle('search_button_show');
	header.classList.toggle('header_height');
};

btn_in_catalogue_first_section.addEventListener('click', () =>{
	catalogue_anchor.scrollIntoView();
});

bouquets_button.addEventListener('click', () => {
	paginator.bouquets_catalogue();
	catalogue_anchor.scrollIntoView();
});

fresh_flowers.addEventListener('click', () => {
	paginator.fresh_flowers_catalogue();
	catalogue_anchor.scrollIntoView();
});

your_bouquet.addEventListener('click', () =>{
	alert('Call us and we will help you to create your own bouquet!');
});

burger_menu.addEventListener('click', () => {
	console.log("burger_clicked")
})
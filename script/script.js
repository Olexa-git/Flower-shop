// import { pagination_right } from './arrow_pagination.js'; // Import of single function by name
import * as paginator from './arrow_pagination.js'; // Import of all functions in file
import { catalogue } from './catalogue.js';

const navigation_lupa = document.getElementById('navigation_lupa');
const header = document.getElementById('header');
const search_field = document.getElementById('search_field');
const search_button = document.getElementById('search_button');
const btn_in_catalogue_first_section = document.getElementById('in_catalogue_first_section');
const catalogue_anchor = document.getElementById('anchor_for_href_cataloge')

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
})


let items_number_in_catalogue = 0;
const cat_btn1=document.getElementById('btn_add_to_bskt_section1');
let items_in_basket = document.getElementById('items_in_basket');

function add_to_basket() {
	items_number_in_catalogue++;
	// items_in_basket.innerHTML = '';
	items_in_basket.innerHTML = items_number_in_catalogue
}

cat_btn1.addEventListener('click', add_to_basket);
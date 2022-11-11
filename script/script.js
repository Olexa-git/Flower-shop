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

// Numbering of items in basket
let items_number_in_catalogue = 0;
const cat_btn1=document.getElementById('btn_add_to_bskt_section1');
let items_in_basket = document.getElementById('items_in_basket');

function add_to_basket() {
	items_number_in_catalogue++;
	items_in_basket.innerHTML = items_number_in_catalogue
}

cat_btn1.addEventListener('click', add_to_basket);

// basket functionality
const basket_icon = document.getElementById('navigation_basket');
const basket = document.getElementById('basket');
const basket_x_btn = document.getElementById('basket_x_btn');
let items_in_basket_list = [];
let basket_items = document.getElementById('basket_items');
const basket_total_amount = document.getElementById('basket_total_amount');
const basket_order_btn = document.getElementById('basket_order');

items_in_basket_list = catalogue.slice(0, 3);

function create_basket_item(basket_item) {
	const template = document.createElement('template');
	const item = `<div class="basket_item">
						<p>${basket_item.title}</p>
						<img src="${basket_item.image}" class="item_image">
						<img src="images/trash_can.png" class="trash_can">
						<p class="item_price">${basket_item.price} $</p>
					</div>`;
	template.innerHTML = item;
	return template.content;
};
function create_basket (page) {
	basket_items.innerHTML = '';
	let basket_total = 0
	for (let i=0; i<3; i++) {
			basket_items.appendChild(create_basket_item(items_in_basket_list[i]));
			basket_total = basket_total+items_in_basket_list[i].price;
			}
	basket_total_amount.innerHTML = `${basket_total} $`
	const x_btn_list = document.getElementsByClassName('trash_can');
	for (let i=0; i<3; i++) {
 		x_btn_list[i].addEventListener('click', () => {
 			console.log(target);
 		});
	 };
};

basket_order_btn.addEventListener('click', () => {
	window.prompt('Enter your phone and we will contact you to clarify delivery details', '(630)');
})

create_basket();



basket_icon.addEventListener('click', ()=> {
	basket.classList.toggle('invisible');
});
basket_x_btn.addEventListener('click', ()=> {
	basket.classList.toggle('invisible');
});
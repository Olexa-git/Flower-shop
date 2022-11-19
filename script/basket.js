import { product_catalogue } from './arrow_pagination.js';
// Numbering of items in basket
let items_number_in_basket = 0;
const cat_btn1=document.getElementById('btn_add_to_bskt_section1');
let items_in_basket = document.getElementById('items_in_basket');
let items_in_basket_list = [];

export function add_to_basket(item) {
	items_number_in_basket++;
	items_in_basket.innerHTML = items_number_in_basket;
	if (event.target.id == 'btn_add_to_bskt_section1') {
		items_in_basket_list.push({
			image: 'images/Headliner_bouquet.png',
			title: 'Long-awaited happiness',
			description: 'gentle and sophisticated chic in a bouquet of roses is a good choice for a loved one',
			price: 22.89
		});
	} else {
		items_in_basket_list.push(product_catalogue[item])
	};
	create_basket();
};

cat_btn1.addEventListener('click', add_to_basket);

// basket functionality
const basket_icon = document.getElementById('navigation_basket');
const basket = document.getElementById('basket');
const basket_x_btn = document.getElementById('basket_x_btn');
let basket_items = document.getElementById('basket_items');
const basket_total_amount = document.getElementById('basket_total_amount');
const basket_order_btn = document.getElementById('basket_order');

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
function create_basket () {
	basket_items.innerHTML = '';
	let basket_total = 0
	for (let i=0; i<items_in_basket_list.length; i++) {
			basket_items.appendChild(create_basket_item(items_in_basket_list[i]));
			basket_total = basket_total+items_in_basket_list[i].price;
			}
	basket_total_amount.innerHTML = `${Math.round(basket_total*100)/100} $`
	const x_btn_list = document.getElementsByClassName('trash_can');
	for (let i=0; i<items_in_basket_list.length; i++) {
 		x_btn_list[i].addEventListener('click', () => {
 			items_in_basket_list.splice(i, 1);
 			items_number_in_basket--;
 			items_in_basket.innerHTML = items_number_in_basket;
 			create_basket();
 		});
	 };
};

basket_order_btn.addEventListener('click', () => {
	window.prompt('Enter your phone and we will contact you to clarify delivery details', '(630)');
})

basket_icon.addEventListener('click', ()=> {
	basket.classList.toggle('invisible');
	create_basket();
});
basket_x_btn.addEventListener('click', ()=> {
	basket.classList.toggle('invisible');
});
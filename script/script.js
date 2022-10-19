// import { pagination_right } from './arrow_pagination.js'; // Import of single function by name
import * as paginator from './arrow_pagination.js'; // Import of all functions in file

right_active_arrow.addEventListener('click', paginator.catalogue_pagination_right);
left_active_arrow.addEventListener('click', paginator.catalogue_pagination_left);

review_pagination.appendChild(paginator.create_review_pagination());
let review_right_arrow = document.getElementById('review_right_arrow');
let review_left_arrow = document.getElementById('review_left_arrow');
review_right_arrow.addEventListener('click', paginator.reviwe_pagination_right);
review_left_arrow.addEventListener('click', paginator.reviwe_pagination_left);
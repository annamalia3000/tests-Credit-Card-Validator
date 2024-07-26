import { handleFormSubmit } from './handleFormSubmit';
import { CardFormWidget } from './widget';

const container = document.querySelector('.container');
const form = new CardFormWidget(container);

form.bindToDOM();

document.querySelector('.card-number-form').addEventListener('submit', handleFormSubmit);
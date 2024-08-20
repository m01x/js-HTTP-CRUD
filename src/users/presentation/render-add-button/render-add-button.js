import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';
/**
 *
 * @param {HTMLDivElement} element
 * @param {()=>} callback
 */
export const renderAddButton = (element, callback) => {
  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');

  element.append(fabButton);

  //listeners
  //TODO
  fabButton.addEventListener('click', () => {
    showModal();
  });
};

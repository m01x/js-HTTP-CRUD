import usersStore from '../../store/users-store';
import './render-buttons.css';

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButton = element => {
  const nextButton = document.createElement('button');
  nextButton.innerText = 'Next ➡️';

  const previousButton = document.createElement('button');
  previousButton.innerText = '⬅️ Prev';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page';
  currentPageLabel.innerText = usersStore.getCurrentPage();

  element.append(previousButton, currentPageLabel, nextButton);
};

import { renderButton } from './presentation/render-buttons/render-buttons';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async element => {
  await usersStore.loadNextPage();

  renderTable(element);
  renderButton(element);
};
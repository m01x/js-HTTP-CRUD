//No queremos exportar directamente el store, porque no queremos que
//nadie lo pueda modificar

import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
  users: [],
  currentPage: 0
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) return;

  state.currentPage += 1;
  state.users = users;
};

const loadPreviousPage = async () => {
  throw new Error(`Todavia no implementado`);
};
//TODO: Implementar
const onUserChanged = () => {
  throw new Error(`Todavia no implementado`);
};

const reloadPage = async () => {
  throw new Error(`Todavia no implementado`);
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,
  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],
  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage
};

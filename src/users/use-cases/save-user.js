import { localhostUserToModel } from '../mappers/localhost.-user.mapper';
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/user';

/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async userLike => {
  //Creamos el objeto User del modelo.
  const user = new User(userLike);
  if (!user.firstName || !user.lastName)
    throw new Error('First Name y Last name are required!');

  //Mapeamos los campos, muy util!
  const userToSave = userModelToLocalhost(user);
  let userUpdated;

  if (user.id) {
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }

  return localhostUserToModel(userUpdated);
};

/**
 *
 * @param {Like<User>} user
 * @returns
 */
const updateUser = async user => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
  //Diferencia entre una peticion PATCH y PUT.
  //PUT: Le dice al backend que quieres reemplazar todo el registro por esto.
  //PATCH: Actualiza unicamente lo que estoy enviando, dependiendo de como este construido el backend
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const updatedUser = await res.json();
  console.log({ updatedUser });
  return updatedUser;
};

/**
 * @param {Like<User>} user
 */
const createUser = async user => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const newUser = await res.json();
  console.log({ newUser });
  return newUser;
};

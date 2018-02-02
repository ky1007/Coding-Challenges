const usersURL = 'http://localhost:3001/api/users/';
const header = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const fetchUsers = () => (
  fetch(usersURL, {
    method: 'GET',
    headers: header,
  })
);
export const createUser = user => (
  fetch(usersURL, {
    method: 'POST',
    headers: header,
    body: JSON.stringify({ user })
  })
);
export const updateUser = user => (
  fetch(`${usersURL}${user.id}`, {
    method: 'PATCH',
    headers: header,
    body: JSON.stringify({ user }),
  })
);

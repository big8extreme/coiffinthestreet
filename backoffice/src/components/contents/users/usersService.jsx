import axios from 'axios';

export class UsersService {

  getUsers() {
    return axios
      .get('http://localhost:3000/users', {
        headers: { Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs' }
      })
      .then(res => res.data.users);
  }

  getUser(role_id) {
    return axios
      .get(`http://localhost:3000/users/${role_id}`, {
        headers: { Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs' }
      })
      .then(res => {
        console.log(res.data.user);
        return res.data.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delUsers(role_id) {
    return axios
      .delete(`http://localhost:3000/users/${role_id}`, {
        headers: { Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs' },
        body: JSON.stringify([
          role_id
        ])
      }
      )
      .then(res => res.data.users);
  }


}


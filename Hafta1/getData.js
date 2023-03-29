import axios from 'axios';

const getData = async (userId) =>  {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`); //sends request to endpoint
    const postsResponse = await axios (`https://jsonplaceholder.typicode.com/posts?id=${userId}`); //sends request to endpoint

    const getData = userResponse.data; //only fetch data
    const getPosts = postsResponse.data; // only fetch data

    return { ...getData, posts: getPosts }; //merge data then return function
  } catch (error) {
    console.error(error); //throws an error
  }
}

export default getData;
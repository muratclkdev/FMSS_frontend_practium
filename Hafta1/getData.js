import axios from 'axios';

const getData = async (userId) =>  {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const getData = userResponse.data;
    const getPosts = postsResponse.data;

    return { ...getData, posts: getPosts };
  } catch (error) {
    console.error(error);
  }
}

export default getData;
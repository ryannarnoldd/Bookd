import Auth from '../utils/auth';
import { PostData } from '../interfaces/PostData';

const retrieveUserPosts = async (postUser: string|null) => {

  try {
    const response = await fetch(`/api/posts/${postUser}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

const retrieveAllPosts = async () => {
  try {
    const response = await fetch(`/api/posts/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

const createPost = async (body: PostData) => {
  try {
    const response = await fetch(
      '/api/posts/', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Auth.getToken()}`
          },
        body: JSON.stringify(body)
      }

    )
    const data = response.json();

    if(!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from Ticket Creation: ', err);
    return Promise.reject('Could not create ticket');
  }
}

export { retrieveAllPosts, retrieveUserPosts, createPost };
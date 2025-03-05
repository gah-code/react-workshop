# JSONPlaceholder API Practice

## **📌 Module 7: Working with API Resources**

### 🎯 **Goal**: Practice fetching, creating, updating, and deleting data from a mock API

## **7.1 Fetching Data from JSONPlaceholder**

### **7.1.1 Fetch All Posts**

```javascript
const fetchAllPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const posts = await response.json();
    console.log('All Posts:', posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
};

fetchAllPosts();
```

✅ **Concepts**: Fetching all resources.

---

### **7.1.2 Fetch a Single Post**

```javascript
const fetchPostById = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const post = await response.json();
    console.log('Single Post:', post);
  } catch (error) {
    console.error('Error fetching post:', error.message);
  }
};

fetchPostById(1);
```

✅ **Concepts**: Fetching a specific post by ID.

---

### **7.1.3 Fetch Comments for a Post**

```javascript
const fetchPostComments = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const comments = await response.json();
    console.log(`Comments for Post ${postId}:`, comments);
  } catch (error) {
    console.error('Error fetching comments:', error.message);
  }
};

fetchPostComments(1);
```

✅ **Concepts**: Fetching related resources.

---

### **7.1.4 Fetch Photos from an Album**

```javascript
const fetchAlbumPhotos = async (albumId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const photos = await response.json();
    console.log(`Photos from Album ${albumId}:`, photos);
  } catch (error) {
    console.error('Error fetching photos:', error.message);
  }
};

fetchAlbumPhotos(1);
```

✅ **Concepts**: Handling image-based API responses.

---

## **7.2 Creating Data**

### **7.2.1 Create a New Post**

```javascript
const createPost = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'New Post Title',
        body: 'This is a newly created post.',
        userId: 1
      })
    });
    
    const newPost = await response.json();
    console.log('Created Post:', newPost);
  } catch (error) {
    console.error('Error creating post:', error.message);
  }
};

createPost();
```

✅ **Concepts**: Sending `POST` requests with JSON data.

---

## **7.3 Updating Data**

### **7.3.1 Updating a Post (PUT - Full Update)**

```javascript
const updatePost = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Updated Post Title',
        body: 'This post has been fully updated.',
        userId: 1
      })
    });
    
    const updatedPost = await response.json();
    console.log('Updated Post:', updatedPost);
  } catch (error) {
    console.error('Error updating post:', error.message);
  }
};

updatePost(1);
```

✅ **Concepts**: Sending `PUT` requests for full updates.

---

### **7.3.2 Partially Updating a Post (PATCH - Partial Update)**

```javascript
const patchPost = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Partially Updated Title'
      })
    });
    
    const patchedPost = await response.json();
    console.log('Partially Updated Post:', patchedPost);
  } catch (error) {
    console.error('Error patching post:', error.message);
  }
};

patchPost(1);
```

✅ **Concepts**: Using `PATCH` for partial updates.

---

## **7.4 Deleting Data**

### **7.4.1 Deleting a Post**

```javascript
const deletePost = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    });
    
    if (response.ok) {
      console.log(`Post ${id} deleted successfully.`);
    } else {
      throw new Error(`Failed to delete post ${id}`);
    }
  } catch (error) {
    console.error('Error deleting post:', error.message);
  }
};

deletePost(1);
```

✅ **Concepts**: Using `DELETE` requests to remove resources.

---

## **📌 What's Next?**

🚀 **Now that you've mastered CRUD operations with JSONPlaceholder, the next step is handling authentication, working with pagination, and optimizing API requests!**

Let me know when you're ready to continue! 🚀

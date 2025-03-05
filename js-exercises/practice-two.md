# JavaScript API Fetching Practice

## **📌 Module 6: Fetching and Handling API Data**

### 🎯 **Goal**: Learn how to fetch, process, and handle API data efficiently

### **6.1 Fetching Post Comments**

👉 **Use `fetch()` to retrieve comments for post ID 1**

```javascript
const fetchPostComments = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const comments = await response.json();
    console.log('Post Comments:', comments);
  } catch (error) {
    console.error('Error fetching post comments:', error.message);
  }
};

fetchPostComments();
```

✅ **Concepts**: `fetch()`, `async/await`, error handling (`try...catch`).

---

### **6.2 Fetching Album Photos**

👉 **Retrieve photos from album ID 1**

```javascript
const fetchAlbumPhotos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const photos = await response.json();
    console.log('Album Photos:', photos);
  } catch (error) {
    console.error('Error fetching album photos:', error.message);
  }
};

fetchAlbumPhotos();
```

✅ **Concepts**: Handling large JSON responses, API structure understanding.

---

### **6.3 Fetching User Albums**

👉 **Retrieve albums for user ID 1**

```javascript
const fetchUserAlbums = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const albums = await response.json();
    console.log('User Albums:', albums);
  } catch (error) {
    console.error('Error fetching user albums:', error.message);
  }
};

fetchUserAlbums();
```

✅ **Concepts**: Fetching data related to a specific user.

---

### **6.4 Fetching User Todos**

👉 **Retrieve todos for user ID 1**

```javascript
const fetchUserTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const todos = await response.json();
    console.log('User Todos:', todos);
  } catch (error) {
    console.error('Error fetching user todos:', error.message);
  }
};

fetchUserTodos();
```

✅ **Concepts**: Handling list-based responses (todos/tasks).

---

### **6.5 Fetching User Posts**

👉 **Retrieve posts from user ID 1**

```javascript
const fetchUserPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const posts = await response.json();
    console.log('User Posts:', posts);
  } catch (error) {
    console.error('Error fetching user posts:', error.message);
  }
};

fetchUserPosts();
```

✅ **Concepts**: User-generated content retrieval.

---

## **📌 What's Next?**

🚀 **Now that you can fetch API data, the next step is working with API pagination, caching, and optimizing requests!**

Let me know when you're ready to continue! 🚀

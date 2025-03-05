# JSONPlaceholder Data Aggregation Practice

## **📌 Module 8: Data Aggregation with API Data**

### 🎯 **Goal**: Learn how to aggregate data using JavaScript methods like `reduce()`, `map()`, `filter()`, and `groupBy()`

## **8.1 Aggregating Post Statistics**

### **8.1.1 Count Number of Posts Per User**

```javascript
const countPostsPerUser = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    const postCounts = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});
    
    console.log('Number of Posts Per User:', postCounts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
};

countPostsPerUser();
```

✅ **Concepts**: `reduce()`, counting occurrences.

---

### **8.1.2 Find Users Who Have More Than 10 Posts**

```javascript
const findActiveUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    const postCounts = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});
    
    const activeUsers = Object.entries(postCounts)
      .filter(([userId, count]) => count > 10)
      .map(([userId]) => parseInt(userId));
    
    console.log('Users with More Than 10 Posts:', activeUsers);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
};

findActiveUsers();
```

✅ **Concepts**: `reduce()`, `filter()`, `map()`.

---

## **8.2 Aggregating Comments**

### **8.2.1 Count Number of Comments Per Post**

```javascript
const countCommentsPerPost = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    
    const commentCounts = comments.reduce((acc, comment) => {
      acc[comment.postId] = (acc[comment.postId] || 0) + 1;
      return acc;
    }, {});
    
    console.log('Number of Comments Per Post:', commentCounts);
  } catch (error) {
    console.error('Error fetching comments:', error.message);
  }
};

countCommentsPerPost();
```

✅ **Concepts**: `reduce()`, counting occurrences.

---

### **8.2.2 Find the Post with the Most Comments**

```javascript
const findMostCommentedPost = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    
    const commentCounts = comments.reduce((acc, comment) => {
      acc[comment.postId] = (acc[comment.postId] || 0) + 1;
      return acc;
    }, {});
    
    const mostCommentedPost = Object.entries(commentCounts)
      .reduce((max, entry) => entry[1] > max[1] ? entry : max);
    
    console.log('Most Commented Post:', mostCommentedPost);
  } catch (error) {
    console.error('Error fetching comments:', error.message);
  }
};

findMostCommentedPost();
```

✅ **Concepts**: `reduce()`, `Object.entries()`, finding max value.

---

## **8.3 Aggregating To-Do Tasks**

### **8.3.1 Count Completed vs. Incomplete Todos**

```javascript
const countCompletedTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    
    const todoCounts = todos.reduce((acc, todo) => {
      acc[todo.completed ? 'completed' : 'incomplete']++;
      return acc;
    }, { completed: 0, incomplete: 0 });
    
    console.log('Completed vs. Incomplete Todos:', todoCounts);
  } catch (error) {
    console.error('Error fetching todos:', error.message);
  }
};

countCompletedTodos();
```

✅ **Concepts**: `reduce()`, boolean-based categorization.

---

### **8.3.2 Find Users with the Most Completed Todos**

```javascript
const findUsersWithMostCompletedTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    
    const completedCounts = todos.reduce((acc, todo) => {
      if (todo.completed) {
        acc[todo.userId] = (acc[todo.userId] || 0) + 1;
      }
      return acc;
    }, {});
    
    const topUsers = Object.entries(completedCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    
    console.log('Users with Most Completed Todos:', topUsers);
  } catch (error) {
    console.error('Error fetching todos:', error.message);
  }
};

findUsersWithMostCompletedTodos();
```

✅ **Concepts**: `reduce()`, `sort()`, ranking values.

---

## **📌 What's Next?**

🚀 **Now that you've mastered data aggregation techniques, the next step is working with real-time APIs, caching, and performance optimization!**

Let me know when you're ready to continue! 🚀

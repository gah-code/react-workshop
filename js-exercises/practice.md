# JavaScript Data Manipulation Practice

## **📌 Module 1: Working with Arrays and Objects**

### 🎯 **Goal**: Get comfortable with fundamental operations like mapping, filtering, and reducing data

### **1.1 Extracting Book Titles**

👉 Use map() to create an array of book titles.

```javascript
const bookTitles = data.map(book => book.title);
console.log('Book Titles:', bookTitles);
```

✅ **Concepts**: `map()`, object property access.

---

### **1.2 Filtering Books by Condition**

👉 Use filter() to get books with movie adaptations.

```javascript
const booksWithMovies = data.filter(book => book.hasMovieAdaptation);
console.log('Books with Movie Adaptations:', booksWithMovies);
```

✅ **Concepts**: `filter()`, boolean condition filtering.

---

### **1.3 Finding a Specific Book**

👉 Use find() to get a book by title.

```javascript
const findBook = title => data.find(book => book.title === title);
console.log('Found Book:', findBook('Dune'));
```

✅ **Concepts**: `find()`, direct object access.

---

### **1.4 Summing Up Pages in All Books**

👉 Use reduce() to calculate the total pages.

```javascript
const totalPages = data.reduce((sum, book) => sum + book.pages, 0);
console.log('Total Pages:', totalPages);
```

✅ **Concepts**: `reduce()`, numerical accumulation.

---

## **📌 Module 2: Sorting and Data Transformation**

### 🎯 **Goal**: Learn how to modify and sort data efficiently

### **2.1 Sorting Books by Publication Date**

👉 Use sort() to arrange books from oldest to newest.

```javascript
const sortedBooks = [...data].sort((a, b) => new Date(a.publicationDate) - new Date(b.publicationDate));
console.log('Sorted Books by Date:', sortedBooks);
```

✅ **Concepts**: `sort()`, `Date` object, array cloning (`[...]`).

---

### **2.2 Restructuring Data (Title & Author)**

👉 Use map() to create a simplified object structure.

```javascript
const bookSummaries = data.map(({ title, author }) => ({ title, author }));
console.log('Title-Author Mapping:', bookSummaries);
```

✅ **Concepts**: `map()`, object destructuring.

---

### **2.3 Flattening Genres into a Unique List**

👉 Use flatMap() and Set to extract unique genres.

```javascript
const uniqueGenres = [...new Set(data.flatMap(book => book.genres))];
console.log('Unique Genres:', uniqueGenres);
```

✅ **Concepts**: `flatMap()`, `Set`, deduplication.

---

## **📌 Module 3: Logical Operations and Short-Circuiting**

### 🎯 **Goal**: Learn short-circuiting techniques for efficient condition handling

### **3.1 Defaulting Values Using `||` (Short-Circuiting)**

👉 Use || to provide a fallback value for missing Spanish translations.

```javascript
const bookSummariesWithFallback = data.map(book => ({
  title: book.title,
  spanishTranslation: book.translations?.spanish || 'No Spanish translation available'
}));
console.log('Book Summaries with Spanish Translations:', bookSummariesWithFallback);
```

✅ **Concepts**: Optional chaining (`?.`), logical OR (`||`).

---

### **3.2 Logical AND (`&&`) for Conditional Execution**

👉 Display a message only for books that have a movie adaptation.

```javascript
const displayBookInfo = book => {
  console.log(book.title);
  book.hasMovieAdaptation && console.log('🎬 Has a movie adaptation!');
};
displayBookInfo(data[0]);
```

✅ **Concepts**: Logical AND (`&&`), conditional logging.

---

### **3.3 Logical OR (`||`) for Fallback Values**

👉 Provide a default value if the book has no genres.

```javascript
const getGenres = book => book.genres || [];
console.log('Genres of The Cyberiad:', getGenres(findBook('The Cyberiad')));
console.log('Genres of Unknown Book:', getGenres(findBook('Unknown')));
```

✅ **Concepts**: Logical OR (`||`), handling missing data.

---

## **📌 Module 4: Optional Chaining (`?.`) for Safer Data Access**

### 🎯 **Goal**: Learn how to safely access deeply nested object properties

### **4.1 Safely Access Ratings with Optional Chaining**

👉 Prevent errors when accessing deeply nested properties.

```javascript
const getBookRating = title => {
  const book = data.find(book => book.title === title);
  return book?.reviews?.goodreads?.rating ?? 'Rating not available';
};
console.log('Dune Rating:', getBookRating('Dune'));
console.log('Unknown Book Rating:', getBookRating('Unknown'));
```

✅ **Concepts**: Optional chaining (`?.`), nullish coalescing (`??`).

---

### **4.2 Check if All Books Have Translations Using `.every()`**

👉 Ensure every book has at least one translation.

```javascript
const allTranslated = data.every(book => Object.keys(book.translations).length > 0);
console.log('Do all books have translations?', allTranslated);
```

✅ **Concepts**: `.every()`, object key counting.

---

## **📌 Module 5: Combining Techniques for Advanced Filtering**

### 🎯 **Goal**: Learn how to filter and manipulate complex data sets efficiently

### **5.1 Finding Highly Rated Books**

👉 Filter books with a rating above 4.5 on Goodreads and a movie adaptation.

```javascript
const highlyRatedBooks = data.filter(book => book.reviews?.goodreads?.rating > 4.5 && book.hasMovieAdaptation);
console.log('Highly Rated Books with Movie Adaptation:', highlyRatedBooks);
```

✅ **Concepts**: `.filter()`, optional chaining (`?.`), logical AND (`&&`).

---

### **5.2 Filtering Books by Multiple Conditions**

👉 Find books that are either "fantasy" genre or have more than 500 pages.

```javascript
const filterBooksByGenre = genre => data.filter(book => book.genres.includes(genre) || book.pages > 500);
console.log('Fantasy Books or Long Books:', filterBooksByGenre('fantasy'));
```

✅ **Concepts**: `.filter()`, logical OR (`||`).

---

## **📌 What's Next? Fetching API Data**

🚀 **Now that you've mastered JavaScript array methods, short-circuiting, and optional chaining, the next step is applying these skills to API fetching!**

Let me know when you're ready to continue! 🚀

# 🔗 URL Shortener Backend

This is the backend for a custom URL Shortener application built with the MERN stack. It includes features such as user authentication, custom short URL creation, redirection, and click history tracking.

---

## 🧰 Tech Stack

| Layer         | Technology        | Description                                              |
|---------------|-------------------|----------------------------------------------------------|
| Language      | Node.js           | Runtime for JavaScript on the backend                    |
| Framework     | Express.js        | Web framework for handling API requests                  |
| Database      | MongoDB           | NoSQL database to store users and shortened URLs         |
| Auth          | JWT               | JSON Web Tokens for secure user authentication           |
| Validation    | Express Validator | Middleware for validating incoming requests              |
| CORS          | Middleware        | Enables cross-origin requests from frontend              |

---

## 🔐 Authentication Routes

### `POST /api/auth/register`

Registers a new user.

#### ✅ Request Body:
```json
{
  "email": "r555sid@gmail.com",
  "password": "123123"
}
```

Response :
```json
{
  "message": "User registered successfully",
 
}
```

    
---

### `POST /api/auth/login`

Logs in an existing user and returns a JWT token.

#### ✅ Request Body:
```json
{
  "email": "r555sid@gmail.com",
  "password": "123123"
}
```
Response :
```json
{

  "token": "your-jwt-token"
 
}
```


### 🔗 URL Shortening Routes
All routes below require authentication using a JWT token in the Authorization header.

`POST /api/url/shorten`

YOu can shorten you're URL now ,here !

#### Authorization: Bearer <your-jwt-token>

```json
{
    "originalUrl":"https://youtu.be/KEbrcWmjRy4",
    "customAlias":"beast_vijay"
}
```

## Response 

```json

{
        "_id": "67f7b7bf38feac0cf07c27bc",
        "originalUrl": "https://youtu.be/KEbrcWmjRy4",
        "shortId": "beast_vijay",
        "userId": "67f7aff47107eea67623f103",
        "clicks": 9,
        "createdAt": "2025-04-10T12:21:19.289Z",
        "__v": 0
    }
```


### `GET /api/url/history`

Fetches all URLs shortened by the logged-in user.

#### 🔐 Headers: Authorization: Bearer <your-jwt-token>


#### 🔁 Response:
```json
[
  {
    "_id": "67f7b7bf38feac0cf07c27bc",
    "originalUrl": "https://youtu.be/KEbrcWmjRy4",
    "shortId": "beast_vijay",
    "userId": "67f7aff47107eea67623f103",
    "clicks": 9,
    "createdAt": "2025-04-10T12:21:19.289Z",
    "__v": 0
  },
  {
    "_id": "67f7b7ee38feac0cf07c27c1",
    "originalUrl": "https://youtu.be/J25jHfjGa_A",
    "shortId": "Master_Intro_bgm",
    "userId": "67f7aff47107eea67623f103",
    "clicks": 3,
    "createdAt": "2025-04-10T12:22:06.255Z",
    "__v": 0
  },
  {
    "_id": "67f7e6aeda654dce25fbda94",
    "originalUrl": "https://www.youtube.com/watch?v=eQNjCg3QFFs",
    "shortId": "lo_ki_verse_",
    "userId": "67f7aff47107eea67623f103",
    "clicks": 2,
    "createdAt": "2025-04-10T15:41:34.369Z",
    "__v": 0
  }
]
```


---

## 🔁 GET /u/:shortId

This route is responsible for **redirecting** the user from a shortened URL to the original long URL. It also tracks how many times the shortened URL has been clicked by incrementing the `clicks` count for analytics.

---

### 📌 Endpoint


Where `:shortId` is the unique alias (either auto-generated or custom) assigned to a long URL.

---

### ✅ Functionality

- Looks up the document in the database with the matching `shortId`.
- If found:
    - Increments the `clicks` counter by 1.
    - Redirects the user to the original URL.
- If not found:
    - Returns a `404 Not Found` response with a message like: `"Short URL not found"`.

---

### 🔄 Example Request

```http
GET http://localhost:5000/u/yt123
```

Also, it will increase the clicks field for that entry in MongoDB by 1.




---

---

## 🌱 Environment Variables

Create a `.env` file in the root directory of your backend project and define the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

```

### 🚀 Running the Backend

```node
npm install
npm run dev

```


### Dependencies Used
Express - For building the REST API

Mongoose - MongoDB object modeling

Bcrypt - Password hashing

JSON Web Token (JWT) - Authentication

dotenv - Environment variable support

CORS - Cross-origin resource sharing

nodemon - Development hot reload


--- 
## 🙌 Contributing


Feel free to fork this project, submit pull requests, or open issues. Contributions are welcome!



---

### 📄 License


This project is licensed under the MIT License.
See the LICENSE file for details.

---

### 👨‍💻 Author
Made with ❤️ by Siddharth
GitHub: https://github.com/isid555

Twitter: @r555sid


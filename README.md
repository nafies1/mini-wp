# mini-wp

Base url : **http://api-mini-wp.nafies.tech/**

### Home
Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/` | GET | `none` | `200` OK | Show `Welcome to mini WP server. For further information, please contact Us at nafies1` in a JSON format

### User :

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/user/register` | POST | **Body**<br>name: `String`<br>email: `String`<br>password: `String` | **Success**<br>`201` Created<br>**Error**<br>`500` Internal Server Error | Create a user
`/user/login` | POST | **Body**<br>email: `String`<br>password: `String` | **Success**<br>`200` OK<br>**Error**<br>`400` Bad Request | Sign a user in
`/user/google-sign` | POST | **Headers**<br>token: `String` | **Success**<br>`200` OK<br>**Error**<br>`400` Bad Request | Sign a user in using Google account
`/user` | GET | `none` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Get all users
`/user/:id` | GET | **Headers**<br>`None` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Get one user
`/user/:id` | PUT | **Headers**<br>token: `String`<br>**Body**<br>name: `String`<br>email: `String`<br>password: `String` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Update one user
`/user/:id` | PATCH | **Headers**<br>token: `String`<br>**Body**<br>password: `String` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Change Password
`/user/:id` | DELETE | **Headers**<br>token: `String` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Delete a user

### Article :

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/article` | POST | **Headers**<br>token: `String`<br>**Body**<br>title: `String`<br>content: `String`<br>featured_image: `File` | **Success**<br>`201` Created<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Create an article
`/article` | GET | **Headers**<br>`None` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Get all articles
`/article/:id` | GET | **Headers**<br>token: `String` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Get one article
`/article/:id` | PUT | **Headers**<br>token: `String`<br>**Body**<br>title: `String`<br>content: `String`<br>featured_image: `File` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Update an article
`/article/:id` | PATCH | **Headers**<br>token: `String`<br>**Body**<br>published: `Boolean` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Publish or unpublish an article
`/article/:id` | DELETE | **Headers**<br>token: `String` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Delete an article


### Undefined Route :

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/*` | any | any | **Error**<br>`404` <br>Route not found | Show result if route not found
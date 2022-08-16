# URL Shortener
URL shortener task for TAP

Built using ReactJs, NodeJs, Express and PostgreSQL

Requires npm, node and postgresql

To run the application:

1. In the root directory, run `npm install` to install all dependencies

2. As the data persists in a PostgreSQL database, you will need to have the latest version of PostgreSQl installed.

3. Follow the table scheme in `database.sql` file to create the necessary database and table.

4. Ensure that the PostgreSQL credentials in `.env` file are updated to match your local PostgreSQL server credentials

5. In one terminal, run `cd client && npm start` to start the client instance

6. In another terminal, run `node index` to start the server instance

7. Enter `http://localhost:3000` on your browser to access the URL shortener

<br>

### Issues encountered
Due to an issue regarding the compatibility of React Router and heroku, deployment to heroku was not finished. There was an issue regarding undefined parameters in the URL path during redirection of short URL to long URL.


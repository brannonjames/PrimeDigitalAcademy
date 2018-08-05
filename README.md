# Prime Feedback

The coolest new way for Prime Digital Academy students to submit their daily feedback. 

## Built With

React, Redux, CSS5, Node/Express, Postgres

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Posgres](https://www.postgresql.org/)


### Installing

You'll need to create the correct database and table to get started.

```sql

CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');

```

### SETUP

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## Screen Shot

Coming soon...


### Next Steps

- [ ] Animated transition between views
- [ ] Authentication for the admin page
- [ ] A more user friendly layout around radio buttons
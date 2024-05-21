import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rules below
specify that owners, authenticated via your Auth resource can "create",
"read", "update", and "delete" their own records. Public users,
authenticated via an API key, can only "read" records.
=========================================================================*/
const schema = a.schema({
  Comment: a
    .model({
      author: a.belongsTo('User', 'userId'),
      body: a.string(),
      thread: a.belongsTo('Thread', 'threadId'),
      threadId: a.id(),
      userId: a.id(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Thread: a
    .model({
      author: a.belongsTo('User', 'userId'),
      comments: a.hasMany('Comment', 'threadId'),
      description: a.string(),
      title: a.string(),
      userId: a.id(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  User: a
    .model({
      comments: a.hasMany('Comment', 'userId'),
      lineUserId: a.string(),
      name: a.string(),
      threads: a.hasMany('Thread', 'userId'),
    })
    .secondaryIndexes((index) => [index('lineUserId')])
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  authorizationModes: {
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
    defaultAuthorizationMode: 'apiKey',
  },
  schema,
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

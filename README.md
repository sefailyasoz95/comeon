at the root level of the project, first run command #1 and then open another terminal and run command #2, app should run without an issue.

Command #1 : npx json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js

Command #2 : yarn start //or npm start

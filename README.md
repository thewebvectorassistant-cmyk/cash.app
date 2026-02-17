# Cash App Clone

A cloned version of the Cash App with mock backend for login functionality.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser to:
   - Marketing page: http://localhost:3002/
   - Login page: http://localhost:3002/login

## Features

- Mock login functionality
- Mock account creation
- Static marketing site
- All API calls are mocked to return success responses

## What was fixed

The original clone had non-functional login and account creation because it relied on backend APIs that weren't available. This implementation adds a Node.js Express server that mocks all the necessary API endpoints, allowing the login and signup flows to work locally.

## Further Modifications

You can modify the mock responses in `server.js` to customize the behavior, or integrate with a real backend API.

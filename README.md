# Express.js Tutorial Server

A simple Node.js server built with Express.js framework, demonstrating basic routing and endpoint creation. This tutorial project includes two endpoints that return plain text responses.

## Features

- Express.js web framework integration
- Two GET endpoints with plain text responses
- Configurable server port via environment variables
- Simple and educational code structure

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** version 18.0.0 or higher
- **npm** (Node Package Manager) version 6.0.0 or higher

Check your versions:
```bash
node --version
npm --version
```

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

This will install Express.js and all required dependencies.

## Usage

Start the server:

```bash
npm start
```

The server will start and listen on port 3000 (or the port specified in the PORT environment variable).

You should see:
```
Server is running on http://localhost:3000
Try these endpoints:
  - http://localhost:3000/hello
  - http://localhost:3000/evening
```

## API Endpoints

### GET /hello

Returns a "Hello world" message.

**Request:**
```bash
curl http://localhost:3000/hello
```

**Response:**
```
Hello world
```

### GET /evening

Returns a "Good evening" message.

**Request:**
```bash
curl http://localhost:3000/evening
```

**Response:**
```
Good evening
```

### GET / (Optional)

Returns welcome message with endpoint information.

## Configuration

### Port Configuration

By default, the server runs on port 3000. You can change this using the PORT environment variable:

```bash
PORT=8080 npm start
```

## Project Structure

```
.
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
├── package.json        # Project configuration and dependencies
├── package-lock.json   # Locked dependency versions
├── server.js           # Main application file
└── node_modules/       # Installed dependencies (not tracked in Git)
```

## Dependencies

- **express** (^4.21.2) - Fast, unopinionated, minimalist web framework for Node.js

## License

MIT
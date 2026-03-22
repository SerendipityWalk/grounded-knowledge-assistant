# Governed RAG Frontend

A React front end for the Governed RAG Backend, providing a user interface to search for governance and compliance tools with AI-powered query enhancement and governance validation.

## Features

- Search for governance tools using natural language queries
- AI-enhanced query processing for better semantic search
- Governance validation for queries and responses
- Clean, responsive UI built with React and Vite

## Getting Started

1. Ensure the backend is running on `http://localhost:3000`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to `http://localhost:5173`

## API Integration

The front end communicates with the backend API endpoints:
- `POST /query` - Search for governance tools
- `POST /govern` - Validate queries or responses
- `GET /health` - Health check

## Development

This project uses:
- React 18
- Vite for build tooling
- Modern CSS for styling
- Fetch API for HTTP requests

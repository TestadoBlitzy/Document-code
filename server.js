/**
 * @fileoverview HTTP Server for hao-backprop-test Integration Testing
 * @description This module provides a simple HTTP server implementation designed for 
 * integration testing of backpropagation algorithms. The server offers a basic REST
 * endpoint that can be used to validate HTTP communication patterns and serve as a
 * foundation for testing neural network backpropagation processes.
 * 
 * @module server
 * @version 1.0.0
 * @author hao-backprop-test
 * @since 1.0.0
 * 
 * @example
 * // Start the server
 * node server.js
 * 
 * @example
 * // Test the server endpoint
 * curl http://127.0.0.1:3000/
 * // Returns: Hello, World!
 */

const http = require('http');

/**
 * Server hostname configuration for local development and testing
 * @constant {string} hostname - The IP address the server will bind to
 * @default '127.0.0.1'
 * @description Localhost IP address used for local development. This ensures
 * the server is only accessible from the local machine for testing purposes.
 */
const hostname = '127.0.0.1';

/**
 * Server port configuration for HTTP connections
 * @constant {number} port - The port number the server will listen on
 * @default 3000
 * @description Standard development port for HTTP services. Can be overridden
 * via environment variables for different deployment scenarios.
 */
const port = 3000;

/**
 * HTTP request handler function for processing incoming requests
 * @function requestHandler
 * @description Processes all incoming HTTP requests and generates appropriate responses.
 * This handler implements a simple "Hello, World!" response pattern suitable for
 * basic integration testing and server connectivity validation.
 * 
 * @param {http.IncomingMessage} req - The HTTP request object containing client request data
 * @param {Object} req.method - HTTP method (GET, POST, etc.)
 * @param {Object} req.url - Requested URL path
 * @param {Object} req.headers - Request headers object
 * 
 * @param {http.ServerResponse} res - The HTTP response object for sending data back to client
 * @param {Function} res.setHeader - Method to set response headers
 * @param {Function} res.end - Method to complete the response and send data
 * @param {number} res.statusCode - HTTP status code for the response
 * 
 * @returns {void} This function doesn't return a value, it modifies the response object
 * 
 * @example
 * // The request handler processes requests like this:
 * // GET / HTTP/1.1
 * // Host: 127.0.0.1:3000
 * // 
 * // Response:
 * // HTTP/1.1 200 OK
 * // Content-Type: text/plain
 * // Hello, World!
 */
const server = http.createServer((req, res) => {
  // Set HTTP status code to 200 (OK) indicating successful request processing
  res.statusCode = 200;
  
  // Set Content-Type header to indicate plain text response format
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body and complete the HTTP transaction
  res.end('Hello, World!\n');
});

/**
 * Start the HTTP server and begin listening for incoming connections
 * @function startServer
 * @description Initializes the HTTP server to listen on the specified hostname and port.
 * Once started, the server will accept incoming HTTP requests and process them through
 * the registered request handler. This is the main entry point for server execution.
 * 
 * @param {number} port - Port number to listen on (from port constant)
 * @param {string} hostname - IP address to bind to (from hostname constant)
 * @param {Function} callback - Callback function executed when server starts successfully
 * 
 * @returns {http.Server} Returns the server instance for potential chaining or reference
 * 
 * @example
 * // Server startup process:
 * // 1. Bind to 127.0.0.1:3000
 * // 2. Begin accepting connections
 * // 3. Log startup confirmation
 * // 4. Ready to process HTTP requests
 * 
 * @example
 * // Testing server availability:
 * // curl http://127.0.0.1:3000/
 * // wget http://127.0.0.1:3000/
 * // Browser: http://127.0.0.1:3000/
 */
server.listen(port, hostname, () => {
  /**
   * Server startup confirmation callback
   * @description Executed when the server successfully starts listening on the configured
   * hostname and port. Provides console feedback for development and debugging purposes.
   */
  console.log(`Server running at http://${hostname}:${port}/`);
});

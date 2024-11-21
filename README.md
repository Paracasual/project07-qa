# Urban Grocer - RESTful HTTP Request Testing Suite

This project provides a series of RESTful HTTP request test suites designed to validate API responses. For each HTTP method (`GET`, `POST`, `PUT`, and `DELETE`), two types of tests are conducted:

1. **Response Code Validation:** Ensure that the API returns the expected status code.
2. **Response Body Validation:** Parse the response and verify that the response body contains the expected data.

These tests are written in **Node.js** and utilize the **Jest** testing library for assertions and test execution.

## Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

## Installation

1. Clone the repository to your local environment:
    ```bash
    git clone <repository_url>
    ```
   
2. Navigate to the project directory:
    ```bash
    cd /hm07-qa-us
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Running the Tests

To execute the test suites, run the following command in your terminal:

```bash
npx jest /tests/*Handlers.test.js
```

Replace the * with the HTTP method you wish to test (get, post, put, or delete).

For example, to test the GET method:

```bash
npx jest /tests/getHandlers.test.js
```

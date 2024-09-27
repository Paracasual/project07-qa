// eslint-disable-next-line no-undef
const config = require('../config');

const putRequestBody = {
	"productsList": [
		{
		 "id": 5,
		 "quantity": -1
		}
	]
}

const postRequestBody = {
	"productsList": [
		{
		 "id": 5,
		 "quantity": 3
		}
	]
}

test('Should return status code 200', async () => {
	let actualStatusCode;
	let orderId;

	try {
		// First POST request
		const postResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postRequestBody)
		});
		
		// Extract orderId from the POST response
		const postResponseData = await postResponse.json();
		orderId = postResponseData.id; 

		// Second PUT request, assuming orderId is valid
		const putResponse = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(putRequestBody)
		});
		
		// Assign the status code from the PUT response
		actualStatusCode = putResponse.status;

	} catch (error) {
		console.error('Error during POST or PUT request:', error);
	}

	// Check if the status code is 200
	expect(actualStatusCode).toBe(200);
});


test('Body should contain quantity: 2', async () => {
	let actualResponseBody;
	let orderId;

	try {
		// First POST request
		const postResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postRequestBody)
		});
		
		// Extract orderId from the response
		const postResponseData = await postResponse.json();
		orderId = postResponseData.id; // Ensure this is the order ID, not product ID

		// Second PUT request, assuming orderId is valid
		const putResponse = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(putRequestBody)
		});

		// Log PUT response status and body
		console.log('PUT Response Status:', putResponse.status);
		actualResponseBody = await putResponse.json();
		console.log('PUT Response Body:', actualResponseBody);

	} catch (error) {
		console.error('Error during POST or PUT request:', error);
	}

	// Check if the response body contains the expected quantity
	expect(actualResponseBody.productsList[0].quantity).toBe(2); // Ensure you're checking the quantity inside productsList array
});


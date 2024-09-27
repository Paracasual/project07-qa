// eslint-disable-next-line no-undef
const config = require('../config');

const postRequestBody = {
	"name": "test",
	"cardId": 11
  }

test('Should return status code 200', async () => {
	let actualStatusCode;
	let kitId;

	try {
		// First POST request
		const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postRequestBody)
		});
		
		// Extract orderId from the POST response
		const postResponseData = await postResponse.json();
		kitId = postResponseData.id; 
		console.log('Kit ID:', kitId);


		// Second DELETE request, assuming kitId is valid
		const delResponse = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		
		// Assign the status code from the DELETE response
		actualStatusCode = delResponse.status;

	} catch (error) {
		console.error('Error during POST or DELETE request:', error);
	}

	// Check if the status code is 200
	expect(actualStatusCode).toBe(200);
});


test('Body should contain ok: true', async () => {
	let actualResponseBody;
	let kitId;

	try {
		// First POST request
		const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postRequestBody)
		});
		
		// Extract kitId from the response
		const postResponseData = await postResponse.json();
		kitId = postResponseData.id; 

		// Second DELETE request, assuming kitId is valid
		const delResponse = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		// Log DELETE response status and body
		console.log('DELETE Response Status:', delResponse.status);
		actualResponseBody = await delResponse.json();
		console.log('DELETE Response Body:', actualResponseBody);

	} catch (error) {
		console.error('Error during POST or DELETE request:', error);
	}

	// Check if the response body contains true statement
	expect(actualResponseBody.ok).toBe(true);
});
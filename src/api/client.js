// profile image input
export const uploadImageToCloudinaryAPIMethod = formData => {
	const cloudName = "";
	return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
		method: "POST",
		body: formData,
	})
		.then(checkStatus)
		.then(parseJSON);
};

//helpers

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		setError(response.statusMessage);
	}
}

function parseJSON(response) {
	return response.json();
}

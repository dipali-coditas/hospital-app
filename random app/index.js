// RESTful API
// base_url/user ===> endpoint --> EXPOSED URL
// METHODS -> GET, POST, PUT, PATCH, DELETE --> EXPOSED METHOD
// how the data should be sent --> EXPOSED DATA FORMAT
// how the response should be sent --> EXPOSED RESPONSE FORMAT
const getUserData = () => {
    return [{ name: 'abcd', age: 20 }]
}

// base_url/product ===> endpoint
const getProductData = () => {
    return [];
}

// where our application/code is running (BASE URL)
// https://some-server 
// http://localhost:3000/user
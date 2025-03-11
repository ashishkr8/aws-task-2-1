exports.handler = async (event) => {
    const path = event.rawPath; // Get the request path
    const method = event.requestContext.http.method; // Get the HTTP method

    if (path === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,
                message: "Hello from Lambda",
            }),
        };
    }

    // Handle all other endpoints with a 400 error
    return {
        statusCode: 400,
        body: JSON.stringify({
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`,
        }),
    };
};

// 1. Fetch and Display User Data:
// - Use the Fetch API to get a list of users from a public API. For example, you can use the
// JSONPlaceholder API for this task.
// The endpoint to fetch users is: https://jsonplaceholder.typicode.com/users.
// - Once the data is fetched, display the user details (like name, email, and address) in a list on your
// webpage.


function fetchData() {
    
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log("Data fetched successfully:", data); 
            return data; 
        })
        .catch(error => console.error("Error fetching data:", error)); 
}


fetchData().then(fetchedData => {

    console.log("Fetched Data:", fetchedData);
});

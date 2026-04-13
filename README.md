# Reminder
This application is a clone of Apple Reminder to understand Full Stack development

### **Routes** – API end points.

### **Controllers** – Handle requests and send responses.

The **controller** acts as the intermediary between the client (or user) and the application's core logic (service layer and model). It’s responsible for receiving HTTP requests from the client, processing them (often by interacting with the service layer), and sending back an appropriate HTTP response.

**Responsibilities**:

- Handle incoming HTTP requests (GET, POST, PUT, DELETE, etc.).
- Call functions from the service layer to process the request.
- Format the response (e.g., JSON, HTML) and send it back to the client.
- Handle errors and return appropriate status codes (like 404, 500, etc.).

### **Services** – Responsible for the logic and the actual processing of the data.

The service layer contains the logic of the request. It is responsible for performing operations on the data and coordinating interactions between the model (data) and the controller. It sits between the controller and the model, processing data and applying rules.

**Responsibilities**:

- Perform core logic, such as calculations, transformations, or validations.
- Coordinate and aggregate data from multiple models if needed.
- Handle complex operations like interacting with third-party services or APIs.
- Return processed data or results to the controller for response formation.

### **Models** – Communicate with the database.

The model represents the data layer. It is responsible for interacting with the database to store, retrieve, update, and delete data. Here we write our SQL queries.

**Responsibilities**:

- Handle interactions with the database, such as querying or updating records.
- Provide an abstraction layer to simplify access to data and avoid direct interactions with the database in other layers.

### **Middleware** – Helper functions

Middleware is a set of helper functions that processes requests before they reach routes. It can modify requests, perform checks, or handle errors.

- `express.json()` – This middleware allows Express to parse incoming JSON data.
- Express also provides many other built-in middleware functions, and we can even create our own custom middleware functions, like for error handling.
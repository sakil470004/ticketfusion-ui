
# TicketFusion

Welcome to TicketFusion, a ticket booking dashboard built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to view available events, book tickets, and manage their bookings through an intuitive interface. 

**Live Demo:** [TicketFusion](https://ticketfusion-ui.vercel.app/)

## Table of Contents
- [TicketFusion](#ticketfusion)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)
    - [Comments](#comments)
    - [Events](#events)
    - [Seat Booking](#seat-booking)
    - [Users](#users)
  - [Additional Requirements](#additional-requirements)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **User Authentication:** Sign up and sign in functionality with JWT-based authentication.
- **Event Management:** View a list of available events and detailed information for each event.
- **Ticket Booking:** Book tickets for events, view and manage bookings.
- **Error Handling:** Proper error handling and validation to ensure a smooth user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ticketfusion-frontend.git
   cd ticketfusion-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   REACT_APP_API_URL=your_backend_api_url
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Configuration

Ensure you have the backend server running and accessible. Update the `REACT_APP_API_URL` in your `.env` file to point to your backend API.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

## Project Structure

The project structure is organized as follows:

```plaintext
ticketfusion-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── SignIn.js
│   │   │   ├── SignUp.js
│   │   │   └── ...
│   │   ├── Events/
│   │   │   ├── EventDetails.js
│   │   │   ├── EventList.js
│   │   │   └── ...
│   │   ├── Bookings/
│   │   │   ├── BookingPage.js
│   │   │   └── ...
│   │   └── ...
│   ├── context/
│   │   └── AuthContext.js
│   ├── services/
│   │   ├── api.js
│   │   └── auth.js
│   ├── App.js
│   ├── index.js
│   └── ...
```

## API Endpoints

Here are the key API endpoints used by the frontend application:

### Comments
- **Get Comments**
  - **GET** `/comments`

### Events
- **Get Events**
  - **GET** `/events`
- **Get Event by ID**
  - **GET** `/events/:id`

### Seat Booking
- **Book Seat**
  - **POST** `/sitBook`
- **Get Seat Bookings**
  - **GET** `/sitBook`
- **Get Seat Booking by ID**
  - **GET** `/singleSitBook/:id`

### Users
- **Register User**
  - **POST** `/users`
- **Authenticate User**
  - **POST** `/users/authenticate`
- **Get User by Email**
  - **GET** `/users/:email`

## Additional Requirements

- **Error Handling:** Ensure proper error handling on both frontend and backend.
- **Validation:** Implement basic validation to prevent invalid data submissions.
- **Free and Paid Tickets:** Implement logic to differentiate between free and paid tickets.
  - Free tickets can be booked without payment.
  - Paid tickets require payment before booking.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` provides a comprehensive overview of your TicketFusion frontend project, including installation instructions, features, configuration, API endpoints, and additional requirements. Feel free to customize it further based on your specific project needs and structure.
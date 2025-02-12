# API Gateway for BookMyAirline
## Overview

The API Gateway serves as the single entry point for all client requests in the BookMyAirline Microservice Backend Project. It routes requests to appropriate microservices, handles authentication and authorization, and performs functions like load balancing, rate limiting, and logging.

## Microservices

The system consists of the following microservices:

### 1. Flight Booking Service

Handles flight reservations, including booking, modifying, and canceling flights.

- Repository: [Flight Booking Service](https://github.com/Bhuwan-Tiwari/AirTicketBookingService)

### 2. Flight Search Service

Allows users to search for available flights based on criteria like destination, date, and price.

- Repository: [Flight Search Service](https://github.com/Bhuwan-Tiwari/flightandsearchservice)

### 3. Authentication Service

Manages user authentication and authorization, including login, registration, and verification.

- Repository: [Authentication Service](https://github.com/Bhuwan-Tiwari/Auth_Service)

### 4. Reminder Service

Sends notifications and reminders to users regarding their flight schedules and upcoming bookings.

- Repository: [Reminder Service](https://github.com/Bhuwan-Tiwari/Reminder_Service)

## Architecture

The project follows a microservices architecture, ensuring that each service is:

- Independently deployable
- Scalable
- Maintainable

Each microservice communicates through well-defined APIs using HTTP/REST.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Architecture**: MVC

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- MySQL

### Setup Instructions

1. Clone this repository and all related microservices.
2. Follow the setup instructions provided in each microservice repository.
3. Run the API Gateway and the microservices to start the system.

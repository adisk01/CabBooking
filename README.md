# Cab Booking System

This web application allows users to book cabs for their desired routes. It calculates the shortest time and estimated cost based on the selected cab and destination.

## Features

- **Cab Booking:** Users can enter their email, source, and destination to book a cab.

- **Shortest Route:** The system calculates the shortest possible time from source to destination.

- **Multiple Cabs:** There are a total of 5 cabs with different pricing. No cab has overlapping start and end times.

- **Estimated Cost:** The system provides an estimated cost depending on the chosen cab and the time taken to reach the destination.

- **Cab Tracking:** Users can track the status of their cab booking.

- **View and Edit Cabs:** Admins can view and edit the details of cabs, including their pricing.

- **Responsive Design:** The web application is designed to be responsive on various devices.

- **Email Notifications:** Users receive email notifications at the time of booking.

## How it Works

1. **User Registration/Login:**
    - Users can register or log in using their email and password.

2. **Booking a Cab:**
    - Users enter their email, source, and destination.
    - The system calculates the shortest route and estimated cost based on the selected cab.

3. **Admin Access:**
    - Admins can log in to view and edit cab details, including pricing.

4. **Cab Tracking:**
    - Users can track the status of their cab booking through the application.

## Dependencies

- Express.js
- MongoDB
- React
- Nodemailer (for sending email notifications)
- Bootstrap (for responsive design)
- Node.js
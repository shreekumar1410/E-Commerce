
# E-Commerce Full Stack Development

This is a full-stack e-commerce website built using the **MERN stack** (MongoDB, Express, React, Node.js). The platform provides users with the ability to browse products, add them to their cart, and make purchases. Admins have the ability to manage products and view orders.

## Features

### User Side:
- **User Authentication:** Sign up and login using JWT for security.
- **Product Listings:** Users can browse a catalog of products with details such as price, description, and availability.
- **Shopping Cart:** Add and manage products in the shopping cart.
- **Order Processing:** Users can place orders for the items in their cart.
- **Payment Integration:** Payment gateway integration to handle payments (could be Stripe/PayPal).

### Admin Side:
- **Product Management:** Admins can add, update, and delete products.
- **Order Management:** View and manage user orders.
- **Dashboard:** Analytics and insights into sales and product performance.

## Tech Stack

### Frontend:
- **React.js**: Handles the user interface and interactions.
- **Redux**: Manages global state across the application.
- **CSS / Bootstrap**: For styling and responsiveness.
  
### Backend:
- **Node.js & Express.js**: For building the RESTful APIs.
- **MongoDB**: Database to store product, user, and order information.
- **JWT**: Secure user authentication.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.

## Project Structure

```
/client          # React frontend
/server          # Express backend
  /models        # Mongoose models (User, Product, Order)
  /routes        # API routes for users, products, and orders
  /controllers   # Controller functions handling the requests
  /middleware    # Middleware for authentication and error handling
```

## Installation

### Prerequisites:
- **Node.js**: [Download Node.js](https://nodejs.org)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Steps:

1. **Clone the repository:**

```bash
git clone https://github.com/shreekumar1410/E-Commerce_FSD.git
```

2. **Navigate into the project folder:**

```bash
cd E-Commerce_FSD
```

3. **Install backend dependencies:**

```bash
cd server
npm install
```

4. **Install frontend dependencies:**

```bash
cd ../client
npm install
```

5. **Setup Environment Variables:**

Create a `.env` file in the `server` directory with the following:

```
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PAYPAL_CLIENT_ID=<your_paypal_client_id>
```

6. **Run the application:**

- Start the backend server:

```bash
cd server
npm start
```

- Start the frontend:

```bash
cd ../client
npm start
```

The app should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.

### Build for Production

To create a production build of the React app:

```bash
cd client
npm run build
```

This will optimize and bundle the frontend into a `build/` folder, which can then be deployed.

## API Endpoints

### User Routes:
- `POST /api/users/login`: Authenticate user and get token.
- `POST /api/users/register`: Register a new user.
- `GET /api/users/profile`: Get user profile (Protected).

### Product Routes:
- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a single product by ID (Protected for admin).

### Order Routes:
- `POST /api/orders`: Place a new order.
- `GET /api/orders/:id`: Get order details by ID (Protected).
- `PUT /api/orders/:id/pay`: Update order payment status (Protected).

### Admin Routes:
- `POST /api/products`: Add new product (Admin only).
- `PUT /api/products/:id`: Update product details (Admin only).
- `DELETE /api/products/:id`: Delete a product (Admin only).

## Contributions

Feel free to fork this project, create a branch, and submit a pull request. Any contributions to improve functionality, design, or optimization are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: shreekumarmb@gmail.com
- **GitHub**: [shreekumar1410](https://github.com/shreekumar1410)

```

This `README.md` file is structured to give an overview of the project, its features, how to install and run it, and information about contributing and licensing. You can customize the content further as per your specific project details.

# Quick Order Client Starter


Welcome to the Quick Order Client Starter repository! This project is part of the Next Level Web Development course and provides a foundational setup for integrating the AmarPay payment system into a web application. 


This project serves as a starter pack for implementing a payment system in web applications using AmarPay, specifically designed for educational purposes in advanced web development.


### **Getting Started**

To get started with this project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Apollo-Level2-Web-Dev/quick-order-client-starter.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd quick-order-client-starter
   ```

3. **Install Dependencies:**

   Ensure you have Node.js and npm installed. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

5. **Run the Application:**

   Start the development server with:

   ```bash
   npm run dev
   ```

   Your application will be available at `http://localhost:5173/`.

##### **Directory Structure**

```plaintext
public/
└── vite.svg                  # Vite logo or asset used in the project

src/
├── App.css                   # Global styles for the application
├── App.jsx                   # Main React component for the app
├── index.css                 # Additional global styles
├── main.jsx                  # Entry point for the React application
├── redux/                    # Redux-related files
│   ├── api/                  # API configuration and utilities
│   │   └── api.ts            # API service definitions
│   ├── features/            # Redux slices and feature-specific logic
│   │   └── cartSlice.ts      # Slice for cart state management
│   ├── hooks.ts              # Custom Redux hooks
│   └── store.ts              # Redux store configuration
├── routes/                   # Route definitions for the application
│   └── index.tsx             # Main routing setup
├── assets/                   # Static assets like images
│   ├── logo.png              # Project logo
│   └── react.svg             # React logo or asset
├── components/              # Reusable React components
│   ├── Banner.tsx            # Banner component
│   ├── Navbar.tsx            # Navigation bar component
│   ├── Products.tsx          # Products listing component
│   ├── CartDetails.tsx       # Component displaying cart details
│   ├── OrderSummary.tsx      # Order summary component
│   ├── Ratings.tsx           # Ratings component
│   ├── Modal.tsx             # Modal component
│   ├── ProductCard.tsx       # Component for displaying a single product
│   └── layouts/              # Layout components
│       └── MainLayout.tsx    # Main layout component for the app
├── data/                    # Static data files
│   └── products.ts           # Product data
├── pages/                   # Page components or views
│   ├── Cart.tsx              # Cart page component
│   ├── CheckOutPage.tsx      # Checkout page component
│   └── Home.tsx              # Home page component
└── declarations.d.ts         # TypeScript declaration file for module types
```

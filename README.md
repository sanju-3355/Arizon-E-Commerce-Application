# Arizon E-Commerce Application

Create an e-commerce frontend using Next.js with the following features:

> Demo 
> Link : https://chaithu-arizon-e-commerce-app.netlify.app/

### Usage 

``` 
git clone <github repository link>  //to clone the github repository
npm install                         //to install all the dependencies required to run the application
npm start                           //to start the application
```  

## Development
## Tech Stack
**Frontend** - React JS (React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.)

## Functionality
### 1. Home Page Design 
* Create an attractive, responsive home page with:
  - Header with logo, navigation, and cart icon
  - Hero section
  - Featured products section
  - Footer

### 2. Product Listing Page
* Fetch products from a public API ( https://fakestoreapi.com/products)
* Display products in a responsive grid
* Each product card should show:
  - Image
  - Title
  - Price
  - "Add to Cart" button

### 3. Mini Cart Component
* When products are added to cart, show a mini cart dropdown when the cart icon is clicked
* Mini cart should display:
  - List of added products (image, title, quantity, price)
  - Subtotal
  - "View Cart" button
  - "Checkout" button (can be disabled)

### 4. Full Cart Page
* Accessible when clicking "View Cart" from mini cart
* Show all cart items with:
  - Product details (image, title, price)
  - Quantity adjuster (+, - buttons)
  - Remove item option
  - Order summary (subtotal, shipping, total)
  - Proceed to checkout button

## Technical Requirements
* Use Next.js (App Router preferred)
* Implement responsive design with Tailwind CSS
* Use React hooks for state management (Context API or Zustand recommended)
* Implement proper TypeScript types
* Add loading states where appropriate
* Handle API errors gracefully
* Follow clean code principles

## Deliverables
* GitHub repository with your code
* README with:
  - Setup instructions
  - Brief explanation of your approach
  - Any assumptions you made
* Live demo (Vercel, Netlify, etc.) if possible

## Guidelines

* Followed Github Guidelines
  * Made the commits often and made sure the commit messages are concise and specific
  * Included a README file for explaining the project setup, usage instructions, and any additional information
* Followed Clean Code Guidelines
* The repo is well-organized and easy to navigate 
  * Followed the [create-react-app] folder structure
* The Application handled all the errors

**Reference**: https://fakestoreapi.com/products

## Third-party packages
* React Router (react-router-dom)
* Icons (react-icons)

## Future Improvements
* Implement User Authentication
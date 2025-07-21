# E-commerce Testing Store

This is a comprehensive e-commerce website designed specifically for QA testing and automation training. The store mimics the behavior and structure of a real e-commerce platform, providing a robust environment for practicing various testing techniques.

## Features

### Homepage
- Banner carousel with promotional content
- Featured categories section (Men, Women, Kids, Accessories)
- Featured products grid with 8+ items
- Dark/Light mode toggle

### Product Catalog
- Responsive product grid
- Advanced filtering options:
  - Category checkboxes (Men, Women, Kids, Electronics, Accessories)
  - Price range slider
  - Size selection (S, M, L, XL)
  - Color selection
- Sorting options:
  - Featured
  - Price: Low to High
  - Price: High to Low
  - Rating
  - Newest

### Product Details
- Multiple product images with thumbnails
- Product information (name, price, description)
- Size and color selection
- Quantity selector
- Add to Cart functionality
- Add to Wishlist functionality
- Stock availability indicator

### Shopping Cart
- Cart item listing with images
- Quantity adjustment controls
- Item removal
- Price calculations (subtotal, tax, shipping)
- Proceed to Checkout button

### Checkout
- Contact information form
- Shipping address form
- Payment information form (mock)
- Form validation
- Order summary
- Place Order button

### Order Confirmation
- Order confirmation message
- Order summary with items
- Order details (order number, date, etc.)
- Return to Homepage button

### Additional Features
- Login/Signup modal (mocked)
- Wishlist functionality
- Toast notifications for actions
- Responsive design for all screen sizes
- Dark/Light mode toggle

## Testing Opportunities

This e-commerce store provides opportunities to practice various testing techniques:

### UI/UX Testing
- Responsive design testing
- Form validation testing
- Navigation flow testing
- Modal interaction testing

### Functional Testing
- Add to cart functionality
- Wishlist functionality
- Filter and sort functionality
- Checkout process
- Form submission

### E2E Testing (with Cypress or Playwright)
- Complete purchase flow
- User authentication flow
- Product search and filtering

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast

### Performance Testing
- Page load times
- Image optimization
- Component rendering

## Data Attributes for Testing

The application includes data-testid attributes on key elements to facilitate test automation:

- Product cards: `data-testid="product-{id}"`
- Add to cart buttons: `data-testid="add-to-cart-{id}"`
- Wishlist buttons: `data-testid="wishlist-btn-{id}"`
- Form inputs: `data-testid="checkout-{fieldname}"`
- Notification toasts: `data-testid="notification-toast"`

## Usage

Access the e-commerce store through:
- Direct URL: `/ecommerce`
- Practice section: `/practice/ecommerce`

## Implementation Details

The e-commerce store is built using:
- React for UI components
- React Router for navigation
- Context API for state management (cart, wishlist)
- CSS for styling with responsive design
- Mock product data for demonstration

## Notes for Testers

- This is a mock store; no actual purchases are processed
- All form submissions are simulated
- Product data is static and stored locally
- The store includes intentional test challenges like form validation 
# Backend Server API Documentation

Welcome to the API documentation for our backend server. Below, you will find detailed information about the available API endpoints, including how to access and use them.

## Table of Contents
1. [Invoice Controller](#invoice-controller)
2. [Product Controller](#product-controller)
3. [Order Controller](#order-controller)
4. [Catalog Controller](#catalog-controller)

## Invoice Controller
- [Get a Specific Invoice](#1-get-a-specific-invoice)
- [Get All Invoices](#2-get-all-invoices)
- [Create a New Invoice](#3-create-a-new-invoice)

### 1. Get a Specific Invoice
- **Endpoint Summary**: Retrieves a specific invoice using a payment reference.
- **HTTP Method**: GET
- **URL**: `/api/invoices/{paymentReference}`
- **Parameters**:
  - `paymentReference` (path) - The payment reference of the invoice.
- **Responses**:
  - `200 OK`: Returns the requested invoice.
  - `404 Not Found`: No invoice found with the given payment reference.
  - `500 Internal Server Error`: General server error.

### 2. Get All Invoices
- **Endpoint Summary**: Retrieves a list of all invoices.
- **HTTP Method**: GET
- **URL**: `/api/invoices`
- **Responses**:
  - `200 OK`: Returns an array of all invoices.
  - `500 Internal Server Error`: General server error.

### 3. Create a New Invoice
- **Endpoint Summary**: Creates a new invoice.
- **HTTP Method**: POST
- **URL**: `/api/invoices`
- **Request Body**: Expected to contain all invoice details.
- **Responses**:
  - `201 Created`: Returns the created invoice.
  - `500 Internal Server Error`: Error during the creation of the invoice.

## Product Controller
- [Get a Specific Product](#1-get-a-specific-product)
- [Get All Products](#2-get-all-products)
- [Create a New Product](#3-create-a-new-product)

### 1. Get a Specific Product
- **Endpoint Summary**: Retrieves a specific product by SKU ID.
- **HTTP Method**: GET
- **URL**: `/api/products/{skuId}`
- **Parameters**:
  - `skuId` (path) - The SKU ID of the product.
- **Responses**:
  - `200 OK`: Returns the requested product.
  - `404 Not Found`: No product found with the given SKU ID.
  - `500 Internal Server Error`: General server error.

### 2. Get All Products
- **Endpoint Summary**: Retrieves all products.
- **HTTP Method**: GET
- **URL**: `/api/products`
- **Responses**:
  - `200 OK`: Returns an array of all products.
  - `500 Internal Server Error`: General server error.

### 3. Create a New Product
- **Endpoint Summary**: Creates a new product.
- **HTTP Method**: POST
- **URL**: `/api/products`
- **Request Body**: Expected to contain all product details.
- **Responses**:
  - `201 Created`: Returns the created product.
  - `500 Internal Server Error`: Error during the creation of the product.

## Order Controller
- [Get a Specific Order](#1-get-a-specific-order)
- [Get All Orders](#2-get-all-orders)
- [Create a New Order](#3-create-a-new-order)
- [Receive Order](#4-receive-order)
- [Get Order History](#5-get-order-history)
- [Get Order Details](#6-get-order-details)

### 1. Get a Specific Order
- **Endpoint Summary**: Retrieves a specific order by its ID.
- **HTTP Method**: GET
- **URL**: `/api/orders/{orderId}`
- **Parameters**:
  - `orderId` (path) - The ID of the order to retrieve.
- **Responses**:
  - `200 OK`: Returns the requested order.
  - `404 Not Found`: No order found with the given ID.
  - `500 Internal Server Error`: General server error.

### 2. Get All Orders
- **Endpoint Summary**: Retrieves all orders.
- **HTTP Method**: GET
- **URL**: `/api/orders`
- **Responses**:
  - `200 OK`: Returns an array of all orders.
  - `500 Internal Server Error`: General server error.

### 3. Create a New Order
- **Endpoint Summary**: Creates a new order.
- **HTTP Method**: POST
- **URL**: `/api/orders`
- **Request Body**: Expected to contain all order details.
- **Responses**:
  - `201 Created`: Returns the created order.
  - `500 Internal Server Error`: Error during the creation of the order.

### 4. Receive Order
- **Endpoint Summary**: Updates an existing order as received.
- **HTTP Method**: PUT
- **URL**: `/api/orders/{orderId}/receive`
- **Parameters**:
  - `orderId` (path) - The ID of the order to update.
- **Request Body**: Optional details such as reception time.
- **Responses**:
  - `200 OK`: Returns the updated order.
  - `404 Not Found`: No order found to update.
  - `500 Internal Server Error`: General server error.

### 5. Get Order History
- **Endpoint Summary**: Retrieves order history for a specific user.
- **HTTP Method**: GET
- **URL**: `/api/orders/history/{username}`
- **Parameters**:
  - `username` (path) - The username for which to retrieve order history.
- **Responses**:
  - `200 OK`: Returns an array of orders for the specified user.
  - `404 Not Found`: No orders found for the user.
  - `500 Internal Server Error`: General server error.

### 6. Get Order Details
- **Endpoint Summary**: Retrieves details for a specific order.
- **HTTP Method**: GET
- **URL**: `/api/orders/{orderId}/details/`
- **Parameters**:
  - `orderId` (path) - The ID of the order.
- **Responses**:
  - `200 OK`: Returns detailed information of the order.
  - `404 Not Found`: No order found.
  - `500 Internal Server Error`: General server error.

## Catalog Controller
- [Get a Specific Catalog](#1-get-a-specific-catalog)
- [Get All Catalogs](#2-get-all-catalogs)
- [Create a New Catalog](#3-create-a-new-catalog)

### 1. Get a Specific Catalog
- **Endpoint Summary**: Retrieves a specific catalog by its ID.
- **HTTP Method**: GET
- **URL**: `/api/catalogs/{catalogId}`
- **Parameters**:
  - `catalogId` (path) - The ID of the catalog to retrieve.
- **Responses**:
  - `200 OK`: Returns the requested catalog.
  - `404 Not Found`: No catalog found with the given ID.
  - `500 Internal Server Error`: General server error.

### 2. Get All Catalogs
- **Endpoint Summary**: Retrieves all catalogs.
- **HTTP Method**: GET
- **URL**: `/api/catalogs`
- **Responses**:
  - `200 OK`: Returns an array of all catalogs.
  - `500 Internal Server Error`: General server error.

### 3. Create a New Catalog
- **Endpoint Summary**: Creates a new catalog with detailed category information.
- **HTTP Method**: POST
- **URL**: `/api/catalogs`
- **Request Body**: Expected to contain detailed catalog information, including organizational and category identifiers.
- **Responses**:
  - `201 Created`: Returns the created catalog.
  - `500 Internal Server Error`: Error during the creation of the catalog.

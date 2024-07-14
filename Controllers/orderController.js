const Order = require("../DataModels/orderModel");

const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    console.log("Fetching order with ID:", orderId); // Log the ID being fetched

    const order = await Order.findOne({ Order_ID: orderId });

    console.log("Database response:", order); // Log what MongoDB returned

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    return res.status(200).json(order);
  } catch (err) {
    console.error("Error in getOrder:", err); // Log any errors that occur
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Use Order, which is the imported model
    console.log(orders);
    if (!orders) {
      return res.status(404).json({ error: "orders not found" });
    }
    return res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: error });
  }
};

const receiveOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const receivedValue = Buffer.from([true ? 1 : 0]); // Convert true to a Buffer; adjust logic as necessary
    const order = await Order.findOneAndUpdate(
      { Order_ID: orderId },
      { $set: { Received: receivedValue, "Receive time": new Date() } },
      { new: true, runValidators: true }
    );
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOrderHistory = async (req, res) => {
  try {
    const { username } = req.params;
    const orders = await Order.find({ Username: username });
    if (!orders) {
      return res.status(404).json({ error: "Order history not found" });
    }
    return res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ Order_ID: orderId });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getOrder,
  createOrder,
  getAllOrders,
  receiveOrder,
  getOrderHistory,
  getOrderDetails,
};

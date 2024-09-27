import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, default: 1 },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;

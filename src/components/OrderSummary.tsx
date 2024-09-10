import { CreditCard, Trash2 } from "lucide-react";
import React from "react";
import { clearCart } from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="lg:w-80 w-full h-full bg-primary bg-opacity-35 border-l-4 pl-4 rounded">
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="text-3xl font-bold text-dark pb-4">
              Order Summary
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-dark mt-4">Selected Items:</td>
            <td className="text-dark mt-4 text-right font-semibold">{selectedItems}</td>
          </tr>
          <tr>
            <td className="text-dark">Total Price:</td>
            <td className="text-dark text-right font-semibold">${totalPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="text-dark">Tax ({taxRate * 100}%):</td>
            <td className="text-dark text-right font-semibold">${tax.toFixed(3)}</td>
          </tr>
          <tr>
            <td className="text-xl font-semibold text-dark pt-4">Grand Total:</td>
            <td className="text-xl font-semibold text-dark mt-2 text-right">${grandTotal.toFixed(3)}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 pb-6">
        {" "}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="border border-red-400 px-3 py-2 text-back  mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={15} height={15} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/checkout")

          }}
          className="bg-black px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center"
        >
          <span>Proceed Checkout</span>
          <CreditCard className="inline" width={15} height={15} />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;

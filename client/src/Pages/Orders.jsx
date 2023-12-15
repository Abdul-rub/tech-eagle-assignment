import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const Orders = () => {
  const { fetchUserOrders, userOrders } = useCart();

  useEffect(() => {
    fetchUserOrders();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {userOrders?.map((order) =>
              order.products.map((product) => (
                <tr key={product._id} className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.productId}
                  </th>
                  <td className="px-6 py-4">{product.quantity}</td>
                  <td className="px-6 py-4">
      
                    {product.price}
                  </td>
                </tr>
              ))
            )}
          </tbody>

          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3">
                {userOrders?.reduce((total, order) =>
                  order.products.reduce(
                    (orderTotal, product) => orderTotal + product.quantity,
                    0
                  )
                , 0)}
              </td>
              <td className="px-6 py-3">
                {userOrders.reduce((total, order) =>
                  order.products.reduce(
                    (orderTotal, product) => orderTotal + product.price,
                    0
                  )
                , 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Orders;

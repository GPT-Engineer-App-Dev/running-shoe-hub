import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = Array.from({ length: 3 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: "$99.99",
    quantity: 1,
  }));

  const totalCost = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <div className="space-y-8">
      <section className="cart-items">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>
        <div className="space-y-4">
          {cartItems.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <p>{item.price}</p>
              </CardHeader>
              <CardContent>
                <p>Quantity: {item.quantity}</p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive">Remove</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="order-summary">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigate("/checkout")}>Checkout</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Cart;
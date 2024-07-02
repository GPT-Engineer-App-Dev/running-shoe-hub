import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Trail Running", "Road Running", "Racing"];
  const products = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: "$99.99",
    category: categories[index % categories.length],
  }));

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="flex">
      <aside className="w-1/4 p-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category}>
              <Button variant={selectedCategory === category ? "solid" : "outline"} onClick={() => setSelectedCategory(category)}>
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-3/4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id}>
              <CardHeader>
                <img src={`https://via.placeholder.com/300?text=${product.name}`} alt={product.name} />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p>{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => navigate(`/product/${product.id}`)}>Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
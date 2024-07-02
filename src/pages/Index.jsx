import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <section className="hero-section text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to RunShop</h1>
        <p className="text-lg mb-8">Find the best running shoes for your needs</p>
        <Button onClick={() => navigate("/categories")}>Shop Now</Button>
      </section>

      <section className="featured-products py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder products */}
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={`https://via.placeholder.com/300?text=Product+${index + 1}`} alt={`Product ${index + 1}`} />
              </CardHeader>
              <CardContent>
                <CardTitle>Product {index + 1}</CardTitle>
                <p>$99.99</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => navigate(`/product/${index + 1}`)}>Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="categories py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder categories */}
          {["Trail Running", "Road Running", "Racing"].map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={`https://via.placeholder.com/300?text=${category}`} alt={category} />
              </CardHeader>
              <CardContent>
                <CardTitle>{category}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="testimonials py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <Carousel>
          <CarouselPrevious />
          <CarouselContent>
            {/* Placeholder testimonials */}
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent>
                    <p>"This is the best running shoe I've ever bought!"</p>
                    <p>- Customer {index + 1}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default Index;
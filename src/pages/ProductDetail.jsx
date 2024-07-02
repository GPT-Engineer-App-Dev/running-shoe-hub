import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ProductDetail = () => {
  const { id } = useParams();
  const product = {
    id,
    name: `Product ${id}`,
    price: "$99.99",
    description: "This is a detailed description of the product.",
    images: Array.from({ length: 3 }).map((_, index) => `https://via.placeholder.com/300?text=Product+${id}+Image+${index + 1}`),
    sizes: ["S", "M", "L", "XL"],
  };

  return (
    <div className="space-y-8">
      <section className="product-images">
        <Carousel>
          <CarouselPrevious />
          <CarouselContent>
            {product.images.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt={`Product ${id} Image ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </section>

      <section className="product-info">
        <Card>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <p>{product.price}</p>
          </CardHeader>
          <CardContent>
            <p>{product.description}</p>
            <div className="sizes mt-4">
              <h3 className="text-lg font-bold mb-2">Sizes Available</h3>
              <div className="flex space-x-2">
                {product.sizes.map(size => (
                  <Button key={size} variant="outline">{size}</Button>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="customer-reviews">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
        <div className="space-y-4">
          {/* Placeholder reviews */}
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index}>
              <CardContent>
                <p>"This is a review for product {id}."</p>
                <p>- Customer {index + 1}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
import ProductCard from '@/components/ProductCard';

const fetchProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return data;
};

export default async function Product({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <main className="flex min-h-screen align-center justify-center flex-row max-w-screen items-center flex-wrap p-10 gap-4 bg-white">
      {product && <ProductCard product={product} />}
    </main>
  );
}

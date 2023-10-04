//useClient
import ProductCard from '@/components/ProductCard';

async function getData() {
  const res = await fetch(
    'https://dummyjson.com/products?select=title,description,images'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}

export default async function Home() {
  const data = await getData();

  if (!data) return <div>Loading..</div>;

  return (
    <main className="flex min-h-screen align-center justify-center flex-row max-w-screen items-center flex-wrap p-10 gap-4 bg-white">
      {data?.products?.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </main>
  );
}

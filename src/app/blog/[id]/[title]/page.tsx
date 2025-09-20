import BlogCardComponent from "./components/BlogCard";

interface BlogProp {
  params: { id: string; title: string };
}

export default function BlogDetail({ params }: BlogProp) {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Judul halaman */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {params.title} - Detail Blog ID: {params.id}
      </h1>

      {/* Card Flowbite */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BlogCardComponent
          id={params.id}
          title={params.title}
          description="Ini adalah deskripsi blog menggunakan Flowbite style."
        />
      </div>
    </div>
  );
}

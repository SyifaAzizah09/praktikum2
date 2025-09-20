interface BlogCardProps {
  id: string;
  title: string;
}

export default function BlogCard({ id, title }: BlogCardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">Blog ID: {id}</p>
    </div>
  );
}
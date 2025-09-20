import BlogCardComponent from "./components/BlogCard";

interface BlogProp {
  params: { id: string; title: string };
}

export default function BlogDetail({ params }: BlogProp) {
  return (
    <div className="p-6">
      <BlogCardComponent id={params.id} title={params.title} />
    </div>
  );
}
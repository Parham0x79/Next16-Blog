export default async function BlogId({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  return (
    <h1 className="text-4xl text-orange-500">
      Hello from the Blog Id: {blogId}
    </h1>
  );
}

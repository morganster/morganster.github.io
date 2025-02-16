export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to My SSG Site!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a static site generated with Next.js and styled with Tailwind
        CSS.
      </p>
    </div>
  );
}

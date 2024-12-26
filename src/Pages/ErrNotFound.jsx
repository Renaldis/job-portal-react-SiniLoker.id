export default function ErrNotFound() {
  return (
    <section
      id="not-found"
      className="flex flex-col justify-center items-center h-80 gap-5"
    >
      <h1 className="text-6xl text-red-500">404</h1>
      <h1 className="text-4xl text-red-500">Not Found</h1>
      {/* <i className="text-6xl text-red-500 fas fa-smile"></i> */}
      <h1 className="text-2xl text-slate-600">
        "The page you requested could not be found"
      </h1>
    </section>
  );
}

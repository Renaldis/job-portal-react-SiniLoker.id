export default function CardTestimoni({ res }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-md shadow-md 1/4">
      <img
        src={res.profile_image_url}
        alt={res.name}
        className="w-16 h-16 rounded-full mb-3"
      />
      <h3 className="text-lg font-semibold">{res.name}</h3>
      <p className="text-sm text-blue-500">{res.title_job}</p>
      <p className="mt-3 text-sm text-gray-700">{res.comment}</p>
    </div>
  );
}

export default function CardMitra({ res }) {
  return (
    <>
      <img
        src={res.company_image_url}
        alt={res.company_name}
        className="w-20 md:w-32 lg:w-40"
      />
    </>
  );
}

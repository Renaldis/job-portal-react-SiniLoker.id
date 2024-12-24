export default function CardJobType({ res }) {
  const cardClassess = "px-4 py-1 bg-sky-200 rounded-md lg:text-sm";
  const Type = () => {
    return res.job_type && <span className={cardClassess}>{res.job_type}</span>;
  };
  const Tenure = () => {
    return (
      res.job_tenure && <span className={cardClassess}>{res.job_tenure}</span>
    );
  };
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <Type className={cardClassess} />
      <Tenure className={cardClassess} />
    </div>
  );
}

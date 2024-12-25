export default function LocDropDown({ city, onClick }) {
  return (
    <div
      className="border-b p-2 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
      role="menuitem"
    >
      {city || "Lokasi Tidak Diketahui"}
    </div>
  );
}

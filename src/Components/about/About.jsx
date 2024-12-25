export default function About() {
  return (
    <section className="bg-slate-100 flex w-full p-5">
      <div className="w-1/2 p-5 mt-10">
        <h1 className="text-xl font-bold text-blue-500 mb-2">
          Tentang SiniLoker.id
        </h1>
        <p className="w-[80%]">
          <span className="font-semibold">SiniLoker.id</span> adalah aplikasi
          inovatif yang memudahkan pencari kerja di Indonesia untuk menemukan
          lowongan pekerjaan yang sesuai dengan keahlian dan minat mereka.
          Dengan tampilan yang user-friendly dan fitur pencarian yang efisien,
          SiniLoker.id menyediakan akses langsung ke ribuan lowongan pekerjaan
          dari berbagai industri dan perusahaan terkemuka. Aplikasi ini
          memberikan pengalaman pencarian kerja yang lebih cepat, lebih mudah,
          dan lebih terorganisir.
        </p>
      </div>
      <div className="w-1/2 flex justify-start items-center">
        <img
          className="w-96 h-96"
          src="https://i.pinimg.com/736x/39/ea/d6/39ead63b3820b30f3b183175f70e1d75.jpg"
          alt="HeroSiniLoker.png"
        />
      </div>
    </section>
  );
}

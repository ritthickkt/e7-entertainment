const offices = [
  {
    label: "Registered Office — Hong Kong",
    address:
      "Flat 721, 7/F, LIVEN HOUSE, No. 61–63 King Yip Street, Kwun Tong, Kowloon, Hong Kong",
  },
  {
    label: "India Office — Chennai",
    address: "No 5, Valmeeki Street, Devinagar, Chennai 600109",
  },
  {
    label: "India Office — Tiruppur",
    address:
      "OXF Global India Private Limited, 9/1 Bungalow Street Extension, Tiruppur - 641602. GST: 33AADCO3823F1ZT",
  },
  {
    label: "China Representative Office — Yiwu",
    address:
      "1F020-046, Jinfu Yuan Parking Building, Chouzhou North Road, Choucheng Street, Yiwu City, Jinhua City, Zhejiang Province, China",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-xs text-zinc-500">
      <div className="mx-auto grid max-w-4xl gap-6 px-6 sm:grid-cols-2">
        {offices.map((office) => (
          <div key={office.label}>
            <p className="font-semibold uppercase tracking-[0.15em] text-zinc-400">
              {office.label}
            </p>
            <p className="mt-1 leading-relaxed">{office.address}</p>
          </div>
        ))}
      </div>
      <p className="mt-8">
        &copy; {new Date().getFullYear()} E7 Entertainments Group.
      </p>
    </footer>
  );
}

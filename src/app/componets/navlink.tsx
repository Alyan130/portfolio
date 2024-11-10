import Link from "next/link";

export default function NavLink({ href = "/", title = "Home" }) {
  if (!href || !title) {
    console.error("NavLink is missing 'href' or 'title' props.");
    return null;
  }

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}

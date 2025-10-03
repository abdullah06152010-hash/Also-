import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <div className="text-xl font-bold">BrandName</div>
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/product" className="hover:text-gray-300">Product</Link>
        <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hover:text-gray-300">Login</Link>
        <Link href="/join" className="bg-[#1DA1F2] px-4 py-2 rounded-md font-medium hover:bg-blue-500 transition">
          JOIN US
        </Link>
      </div>
    </header>
  );
}

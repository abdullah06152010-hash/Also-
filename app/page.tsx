import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0B1623] min-h-screen text-white">
     
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold">BrandName</div>
          <nav className="hidden md:flex space-x-8">
          <   Link href="/" className="hover:text-gray-300">Home</Link>
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

     
      <section className="text-center px-6 mt-20">
        <p className="text-blue-400 mb-2">Welcome</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Selling on the<br className="hidden md:block" /> internet like a pro
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="#"
            className="bg-[#1DA1F2] px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
          >
            Get Quote Now
          </Link>
          <Link
            href="#"
            className="border border-blue-400 text-blue-400 px-6 py-3 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-8 pb-20">
        
        <div className="bg-white text-gray-800 rounded-md p-6">
          <div className="w-12 h-12 bg-red-200 rounded-md mb-4"></div>
          <h3 className="text-lg font-semibold mb-2 capitalize">training Courses</h3>
          <p className="text-sm text-gray-600">
            The gradual accumulation of information about atomic and small-scale behaviour…
          </p>
        </div>

      
        <div className="bg-white text-gray-800 rounded-md p-6">
          <div className="w-12 h-12 bg-green-200 rounded-md mb-4"></div>
          <h3 className="text-lg font-semibold mb-2">2,769 online courses</h3>
          <p className="text-sm text-gray-600">
            The gradual accumulation of information about atomic and small-scale behaviour…
          </p>
        </div>


        <div className="bg-[#1DA1F2] text-white rounded-md p-6">
          <div className="w-12 h-12 bg-white rounded-md mb-4"></div>
          <h3 className="text-lg font-semibold mb-2 capitalize">training Courses</h3>
          <p className="text-sm text-white/90">
            The gradual accumulation of information about atomic and small-scale behaviour…
          </p>
        </div>
      </section>
    </main>
  );
}

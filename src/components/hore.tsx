import Link from "next/link";

export default function Hero() {
  return (
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
  );
}

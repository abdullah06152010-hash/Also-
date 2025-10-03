export default function Boxes() {
  return (
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
  );
}
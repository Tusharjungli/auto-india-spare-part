import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 sm:p-12">
      <h1 className="text-4xl font-bold text-blue-600">Auto India Spare Part 🚗</h1>
      <p className="text-lg text-gray-700 mt-4">Find the best spare parts for your vehicle, hassle-free!</p>

      <div className="flex gap-4 mt-8">
        <a
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          href="/shop"
        >
          Browse Parts
        </a>
        <a
          className="px-6 py-3 border border-gray-400 rounded-lg shadow-md hover:bg-gray-200 transition"
          href="/contact"
        >
          Contact Us
        </a>
      </div>

      <Image
        className="mt-8"
        src="/car-parts.png"
        alt="Car parts illustration"
        width={300}
        height={200}
        priority
      />
    </div>
  );
}

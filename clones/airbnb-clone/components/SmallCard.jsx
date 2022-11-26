import Image from "next/image";

function Smallcard({ img, location, distance }) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
    hover:bg-gray-100 hover:scale-105 transition transform duration-200
    ease-out"
    >
      {/* Left side */}
      <div className="relative h-16 w-16">
        <Image src={img} alt="image" layout="fill" className="rounded-lg" />
      </div>

      {/* Right side */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default Smallcard;

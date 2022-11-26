import Image from "next/image";

function BigCards({ img, title }) {
  return (
    <div className="curser-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="simple Image" layout="fill" 
        className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default BigCards;

import Image from "next/image";
import InputBar from "./(components)/inputBar/page";
import BarAnimation from "./(components)/partersBar/page";
import Partners from "./(components)/partersBar/page";

export default function Home() {
  return (
    <div>
      <div className="flex item-center justify-between px-20 py-20 gap-20">
        <div className="flex flex-col  justify-center gap-10">
          <h1 className="text-6xl ">Heading</h1>
          <span className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio voluptate odit dignissimos ipsam perspiciatis recusandae facilis a eaque quae voluptatum eos impedit delectus, repellat aut error facere? Nemo, excepturi?</span>
          <InputBar/>
        </div>
        <div>
          <Image
            src=""
            alt="Hero Image"
            width={600}
            height={500}
            className="rounded-lg shadow-lg bg-[#ffffff18]"
          />
        </div>
      </div>
      <Partners/>
    </div>
  );
}

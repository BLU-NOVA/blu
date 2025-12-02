import Image from "next/image";
import blu from "../public/blu.png";

export default function Logo() {
  return (
    <div>
      <Image src={blu} alt="Logo" width={60} height={60} />
    </div>
  );
}

import Image from "next/image";

import { Button } from "@/components/ui/button";

interface ICustomIconBtnProps {
  src: string;
  width?: number;
  height?: number;
}

const CustomIconBtn = ({
  src,
  width = 25,
  height = 25,
}: ICustomIconBtnProps) => {
  return (
    <Button variant="outline" size="icon">
      <Image src={src} alt="icon" width={width} height={height} />
    </Button>
  );
};

export default CustomIconBtn;

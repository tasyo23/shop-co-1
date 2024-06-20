"use client";
import { validateImage } from "@/functions/validateImage";
import { FunctionComponent } from "react";
import Image from "next/image";
import noImage from "@/assets/images/not-found.webp";
import { forwardRef } from "react";

interface ValidImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ValidImage: FunctionComponent<ValidImageProps> = forwardRef<
  HTMLImageElement,
  ValidImageProps
>(({ src, alt, className }, ref) => {
  const img = validateImage(src);
  return img ? (
    <Image
      src={img}
      width={500}
      height={500}
      alt={alt}
      className={`!h-full ${className}`}
      ref={ref}
    />
  ) : (
    <Image
      src={noImage.src}
      alt={alt}
      height={noImage.height}
      width={noImage.width}
      className={`${className}`}
      ref={ref}
    />
  );
});

export default ValidImage;

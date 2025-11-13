import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-64 h-64 border-2 border-accent border-double rounded-md group sm:w-auto sm:h-auto">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="rounded shadow-xl"
        loading="lazy"
        quality={85}
      />
      <div className="absolute inset-0 border-[3px] z-[-1] rounded-md border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div>
    </div>
  );
};

export default AuthorImage;

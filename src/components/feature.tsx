import Image from "next/image";

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-8 p-8 max-w-[500px] mx-auto">
      <Image src={icon} alt={title} width={64} height={64} />
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Feature;

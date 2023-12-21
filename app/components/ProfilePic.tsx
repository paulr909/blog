import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="rounded-full mx-auto mt-8"
        src="/images/kundalini-awakening.jpg"
        width={200}
        height={200}
        alt="Paul Rogers"
        priority={true}
      />
    </section>
  );
}

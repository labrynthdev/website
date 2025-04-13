import { Marquee } from "@/components/magicui/marquee";
import textData from "@/lib/text-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Testimonials({
  className,
  id,
}: {
  className: string;
  id: string;
}) {
  return (
    <section id={id} className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-5 max-w-7xl mx-auto px-5 xl:px-0">
        <div className="col-span-3">
          <h1 className="text-4xl lg:text-6xl font-medium text-center lg:text-left">
            {textData.testimonials.heading}
            <br />
            <span className="text-[#77A21C]">
              {textData.testimonials.heading_sub}
            </span>
          </h1>
        </div>
        {/* <div className="flex items-end gap-2 col-span-2 justify-center lg:justify-end mt-4 lg:mt-0">
          <Button variant="outline" size="lg" className="rounded-full ">
            <ArrowLeftIcon className="w-4 h-4 mx-2" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full ">
            <ArrowRightIcon className="w-4 h-4 mx-2" />
          </Button>
        </div> */}
      </div>

      <div className=" mt-10">
        <div className="flex items-center justify-center">
          {/* <Image src="/images/testimonials/testimonial-1.png" alt="Testimonial" width={100} height={100} /> */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {textData.testimonials.reviews.map((review) => (
                <Card key={review.name} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  img,
  name,
  title,
  body,
}: {
  img: string;
  name: string;
  title: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-4 min-h-[20rem] min-w-[20rem] justify-between flex flex-col",
        "bg-[#E8E7E7]",
        "dark:bg-[#1E1E1E]"
      )}
    >
      <blockquote>
        <h1 className="font-light text-gray-600 mb-2 ml-1">{name}</h1>
        <div className=" bg-white rounded-3xl p-4">{body}</div>
      </blockquote>
      <div className="flex flex-row items-center gap-2 mt-10">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col justify-between">
          <figcaption className="text-sm font-medium dark:text-white ">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-600 dark:text-white/40">
            {title}
          </p>
        </div>
      </div>
    </figure>
  );
};

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// Define the schema for the form data
const formSchema = z.object({
  header: z.object({
    company_name: z.string(),
    brand_name: z.string(),
  }),
  hero: z.object({
    stats: z.object({
      value: z.string(),
      description: z.string(),
    }),
    description: z.string(),
    cta: z.string(),
  }),
  stats: z.object({
    clients: z.object({
      label: z.string(),
      value: z.string(),
    }),
    projects: z.object({
      label: z.string(),
      value: z.string(),
    }),
    followers: z.object({
      label: z.string(),
      value: z.string(),
    }),
    happy_clients: z.object({
      label: z.string(),
      value: z.string(),
    }),
  }),
  description: z.object({
    paragraph1: z.string(),
    paragraph2: z.string(),
  }),
  pillars: z.object({
    intro: z.object({
      left: z.string(),
      right: z.string(),
    }),
    items: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        value: z.string(),
      })
    ),
    marquee: z.string(),
  }),
  bento: z.object({
    tag: z.string(),
    heading: z.object({
      main: z.string(),
      sub: z.string(),
    }),
    comparison: z.object({
      before: z.string(),
      after: z.string(),
    }),
    section: z.object({
      tag: z.string(),
      heading: z.string(),
    }),
    marquee: z.string(),
  }),
  services: z.object({
    button: z.string(),
    heading: z.string(),
    items: z.array(
      z.object({
        title: z.string(),
        button: z.object({
          view_more: z.string(),
          view_less: z.string(),
        }),
        content: z.object({
          heading: z.string(),
          description: z.string(),
        }),
      })
    ),
  }),
  cases: z.object({
    heading: z.string(),
    cta: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        stats: z.array(
          z.object({
            value: z.string(),
            description: z.string(),
          })
        ),
      })
    ),
  }),
  testimonials: z.object({
    heading: z.string(),
    heading_sub: z.string(),
    reviews: z.array(
      z.object({
        name: z.string(),
        title: z.string(),
        body: z.string(),
        img: z.string(),
      })
    ),
  }),
  square_cta: z.object({
    heading: z.string(),
    description: z.string(),
  }),
  footer: z.object({
    heading: z.string(),
    tagline: z.string(),
    brand: z.object({
      name: z.string(),
      description: z.string(),
    }),
    socials: z.object({
      heading: z.string(),
      links: z.array(z.string()),
    }),
    menu: z.object({
      heading: z.string(),
      links: z.array(z.string()),
    }),
    contact: z.object({
      heading: z.string(),
      phone: z.string(),
      email: z.string(),
      address: z.string(),
    }),
  }),
  menu: z.object({
    button: z.string(),
    items: z.array(z.string()),
    contact: z.object({
      phone: z.string(),
      email: z.string(),
      address: z.string(),
    }),
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContentGenerator() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      header: {
        company_name: "Your Company",
        brand_name: "Labyrnth",
      },
      hero: {
        stats: {
          value: "2M+",
          description: "Lorem ipsum dolor sit amet",
        },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cta: "Explore",
      },
      stats: {
        clients: { label: "CLIENTS", value: "200+" },
        projects: { label: "PROJECTS", value: "300+" },
        followers: { label: "FOLLOWERS", value: "90K" },
        happy_clients: { label: "HAPPY CLIENTS", value: "100%" },
      },
      description: {
        paragraph1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        paragraph2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      pillars: {
        intro: {
          left: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          right:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        items: Array(5).fill({
          name: "Company Name",
          description: "Lorem ipsum dolor sit amet, consectetur",
          value: "1.2M",
        }),
        marquee: "LOREM IPSUM",
      },
      bento: {
        tag: "lorem ipsum dolor",
        heading: {
          main: "Lorem ipsum dolor sit amet, consectetur",
          sub: "adipiscing elit",
        },
        comparison: {
          before: "Before Labrynth",
          after: "After Labrynth",
        },
        section: {
          tag: "Lorem ipsum dolor sit amet",
          heading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        marquee: "lorem ipsum",
      },
      services: {
        button: "Our Services",
        heading:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        items: Array(3).fill({
          title: "Lorem ipsum dolor",
          button: {
            view_more: "View more",
            view_less: "View less",
          },
          content: {
            heading: "Section Content",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        }),
      },
      cases: {
        heading: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        cta: "Book a call",
        items: Array(5).fill({
          name: "case name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          stats: Array(4).fill({
            value: "1.2M",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
          }),
        }),
      },
      testimonials: {
        heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        heading_sub: "sed do eiusmod.",
        reviews: Array(3).fill({
          name: "Jack Doe",
          title: "CEO, Doe Inc.",
          body: "I've never seen anything like this before. It's amazing. I love it.",
          img: "/img/john-do.jpeg",
        }),
      },
      square_cta: {
        heading: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      footer: {
        heading: "Looking for the right path?",
        tagline: "Navigate success with Labrynth",
        brand: {
          name: "Labrynth",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        socials: {
          heading: "Socials",
          links: ["Instagram", "Facebook", "LinkedIn", "Whatsapp"],
        },
        menu: {
          heading: "Menu",
          links: ["About Us", "Services", "Out Works", "Reviews"],
        },
        contact: {
          heading: "Contact",
          phone: "(123) 456-7890",
          email: "exampleemail@gmail.com",
          address: "1234 Elm Street, Apartment 5B, Los Angeles, CA 90015, USA",
        },
      },
      menu: {
        button: "MENU",
        items: ["About us", "Services", "Our works", "Reviews"],
        contact: {
          phone: "(123) 456-7890",
          email: "exampleemail@gmail.com",
          address: "1234 Elm Street, Apartment 5B, Los Angeles, CA 90015, USA",
        },
      },
    },
  });

  // Load saved form data from cookie
  useEffect(() => {
    const savedData = Cookies.get("websiteContent");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key as keyof FormData, value as any);
      });
    }
    console.log(savedData);
    Cookies.set("kiki", "hello kiki");
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitting(true);

    // // Save form data to cookie
    console.log("data", JSON.stringify(data));
    Cookies.set("websiteContent", JSON.stringify(data), {
      expires: 7, // Cookie expires in 7 days
      path: "/", // Available across the entire site
      sameSite: "strict", // Security setting
    });

    // // Create download URL
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);

    // setIsSubmitting(false);
  };

  const renderArrayField = (name: string, index: number, subField: string) => {
    return (
      <input
        {...register(`${name}.${index}.${subField}`)}
        className="w-full p-2 border rounded"
      />
    );
  };

  return (
    <section className="w-screen flex items-center bg-[#F3F3F3]">
      <div className="w-auto max-w-4xl p-6 bg-white mx-auto rounded-lg my-5">
        <h1 className="text-3xl font-bold mb-6">Website Content Generator</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Header Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Header</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Company Name</label>
                <input
                  {...register("header.company_name")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Brand Name</label>
                <input
                  {...register("header.brand_name")}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Hero</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Stats Value</label>
                <input
                  {...register("hero.stats.value")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Stats Description</label>
                <input
                  {...register("hero.stats.description")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Description</label>
                <textarea
                  {...register("hero.description")}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>
              <div>
                <label className="block mb-2">CTA Text</label>
                <input
                  {...register("hero.cta")}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Clients Label</label>
                <input
                  {...register("stats.clients.label")}
                  className="w-full p-2 border rounded"
                />
                <label className="block mb-2 mt-2">Clients Value</label>
                <input
                  {...register("stats.clients.value")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Projects Label</label>
                <input
                  {...register("stats.projects.label")}
                  className="w-full p-2 border rounded"
                />
                <label className="block mb-2 mt-2">Projects Value</label>
                <input
                  {...register("stats.projects.value")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Followers Label</label>
                <input
                  {...register("stats.followers.label")}
                  className="w-full p-2 border rounded"
                />
                <label className="block mb-2 mt-2">Followers Value</label>
                <input
                  {...register("stats.followers.value")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Happy Clients Label</label>
                <input
                  {...register("stats.happy_clients.label")}
                  className="w-full p-2 border rounded"
                />
                <label className="block mb-2 mt-2">Happy Clients Value</label>
                <input
                  {...register("stats.happy_clients.value")}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Paragraph 1</label>
                <textarea
                  {...register("description.paragraph1")}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>
              <div>
                <label className="block mb-2">Paragraph 2</label>
                <textarea
                  {...register("description.paragraph2")}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Pillars Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pillars</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Intro Left</label>
                <textarea
                  {...register("pillars.intro.left")}
                  className="w-full p-2 border rounded"
                  rows={2}
                />
              </div>
              <div>
                <label className="block mb-2">Intro Right</label>
                <textarea
                  {...register("pillars.intro.right")}
                  className="w-full p-2 border rounded"
                  rows={2}
                />
              </div>
              <div>
                <label className="block mb-2">Marquee Text</label>
                <input
                  {...register("pillars.marquee")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Pillar Items</h3>
                {[0, 1, 2, 3, 4].map((index) => (
                  <div key={index} className="border p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">Pillar {index + 1}</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="block mb-1">Name</label>
                        {renderArrayField("pillars.items", index, "name")}
                      </div>
                      <div>
                        <label className="block mb-1">Description</label>
                        {renderArrayField(
                          "pillars.items",
                          index,
                          "description"
                        )}
                      </div>
                      <div>
                        <label className="block mb-1">Value</label>
                        {renderArrayField("pillars.items", index, "value")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Bento</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Tag</label>
                <input
                  {...register("bento.tag")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Main Heading</label>
                <input
                  {...register("bento.heading.main")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Sub Heading</label>
                <input
                  {...register("bento.heading.sub")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Before Text</label>
                <input
                  {...register("bento.comparison.before")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">After Text</label>
                <input
                  {...register("bento.comparison.after")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Section Tag</label>
                <input
                  {...register("bento.section.tag")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Section Heading</label>
                <input
                  {...register("bento.section.heading")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Marquee Text</label>
                <input
                  {...register("bento.marquee")}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Button Text</label>
                <input
                  {...register("services.button")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Heading</label>
                <textarea
                  {...register("services.heading")}
                  className="w-full p-2 border rounded"
                  rows={2}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Service Items</h3>
                {[0, 1, 2].map((index) => (
                  <div key={index} className="border p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">Service {index + 1}</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="block mb-1">Title</label>
                        {renderArrayField("services.items", index, "title")}
                      </div>
                      <div>
                        <label className="block mb-1">View More Text</label>
                        {renderArrayField(
                          "services.items",
                          index,
                          "button.view_more"
                        )}
                      </div>
                      <div>
                        <label className="block mb-1">View Less Text</label>
                        {renderArrayField(
                          "services.items",
                          index,
                          "button.view_less"
                        )}
                      </div>
                      <div>
                        <label className="block mb-1">Content Heading</label>
                        {renderArrayField(
                          "services.items",
                          index,
                          "content.heading"
                        )}
                      </div>
                      <div>
                        <label className="block mb-1">
                          Content Description
                        </label>
                        <textarea
                          {...register(
                            `services.items.${index}.content.description`
                          )}
                          className="w-full p-2 border rounded"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cases Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Cases</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Heading</label>
                <input
                  {...register("cases.heading")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">CTA Text</label>
                <input
                  {...register("cases.cta")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Case Items</h3>
                {[0, 1, 2, 3, 4].map((index) => (
                  <div key={index} className="border p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">Case {index + 1}</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="block mb-1">Name</label>
                        {renderArrayField("cases.items", index, "name")}
                      </div>
                      <div>
                        <label className="block mb-1">Description</label>
                        <textarea
                          {...register(`cases.items.${index}.description`)}
                          className="w-full p-2 border rounded"
                          rows={3}
                        />
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Stats</h5>
                        {[0, 1, 2, 3].map((statIndex) => (
                          <div
                            key={statIndex}
                            className="border p-2 rounded-lg mb-2"
                          >
                            <div>
                              <label className="block mb-1">Value</label>
                              {renderArrayField(
                                `cases.items.${index}.stats`,
                                statIndex,
                                "value"
                              )}
                            </div>
                            <div>
                              <label className="block mb-1">Description</label>
                              {renderArrayField(
                                `cases.items.${index}.stats`,
                                statIndex,
                                "description"
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Heading</label>
                <input
                  {...register("testimonials.heading")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Sub Heading</label>
                <input
                  {...register("testimonials.heading_sub")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Reviews</h3>
                {[0, 1, 2].map((index) => (
                  <div key={index} className="border p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">Review {index + 1}</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="block mb-1">Name</label>
                        {renderArrayField(
                          "testimonials.reviews",
                          index,
                          "name"
                        )}
                      </div>
                      <div>
                        <label className="block mb-1">Title</label>
                        {renderArrayField(
                          "testimonials.reviews",
                          index,
                          "title"
                        )}
                      </div>
                      <div>
                        <label className="block mb-1">Body</label>
                        <textarea
                          {...register(`testimonials.reviews.${index}.body`)}
                          className="w-full p-2 border rounded"
                          rows={3}
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Image Path</label>
                        {renderArrayField("testimonials.reviews", index, "img")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Square CTA Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Square CTA</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Heading</label>
                <input
                  {...register("square_cta.heading")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Description</label>
                <textarea
                  {...register("square_cta.description")}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Footer</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Heading</label>
                <input
                  {...register("footer.heading")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Tagline</label>
                <input
                  {...register("footer.tagline")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Brand</h3>
                <div className="space-y-2">
                  <div>
                    <label className="block mb-1">Name</label>
                    <input
                      {...register("footer.brand.name")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Description</label>
                    <textarea
                      {...register("footer.brand.description")}
                      className="w-full p-2 border rounded"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Socials</h3>
                <div className="space-y-2">
                  <div>
                    <label className="block mb-1">Heading</label>
                    <input
                      {...register("footer.socials.heading")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">
                      Links (comma separated)
                    </label>
                    <input
                      {...register("footer.socials.links")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Menu</h3>
                <div className="space-y-2">
                  <div>
                    <label className="block mb-1">Heading</label>
                    <input
                      {...register("footer.menu.heading")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">
                      Links (comma separated)
                    </label>
                    <input
                      {...register("footer.menu.links")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <div className="space-y-2">
                  <div>
                    <label className="block mb-1">Heading</label>
                    <input
                      {...register("footer.contact.heading")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Phone</label>
                    <input
                      {...register("footer.contact.phone")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Email</label>
                    <input
                      {...register("footer.contact.email")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Address</label>
                    <textarea
                      {...register("footer.contact.address")}
                      className="w-full p-2 border rounded"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Button Text</label>
                <input
                  {...register("menu.button")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">
                  Menu Items (comma separated)
                </label>
                <input
                  {...register("menu.items")}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <div className="space-y-2">
                  <div>
                    <label className="block mb-1">Phone</label>
                    <input
                      {...register("menu.contact.phone")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Email</label>
                    <input
                      {...register("menu.contact.email")}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Address</label>
                    <textarea
                      {...register("menu.contact.address")}
                      className="w-full p-2 border rounded"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isSubmitting ? "Generating..." : "Generate Content"}
            </button>

            {downloadUrl && (
              <a
                href={downloadUrl}
                download="website_content.json"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Download JSON
              </a>
            )}
          </div>
        </form>

        {Object.keys(errors).length > 0 && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            <h3 className="font-semibold">Form Errors:</h3>
            <ul className="list-disc pl-5">
              {Object.entries(errors).map(([key, error]) => (
                <li key={key}>{error?.message as string}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

import { MetadataRoute } from "next";

interface CircleSlugResponse {
  academicCircles: {
    data: CircleSlug[];
  };
}

interface CircleSlug {
  attributes: {
    slug: string;
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  const public_url = process.env.NEXT_PUBLIC_URL;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify({
      query: `
        query {
          academicCircles {
            data {
              attributes {
                slug
              }
            }
          }
        }
      `,
    }),
  });

  const { data }: { data: CircleSlugResponse } = await response.json();

  const academicCirclesRoutes: MetadataRoute.Sitemap =
    data.academicCircles.data.map((circle: CircleSlug) => ({
      url: `${public_url}/kola-naukowe/${circle.attributes.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: `${public_url}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${public_url}/kola-naukowe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${public_url}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${public_url}/faq`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...academicCirclesRoutes,
  ];
}

// Busel
import buselCover from "../assets/projects/busel/cover.png"
import busel1 from "../assets/projects/busel/1.png"
import busel2 from "../assets/projects/busel/2.png"
import busel3 from "../assets/projects/busel/3.png"
import busel4 from "../assets/projects/busel/4.png"

export const PROJECTS_DATA = [
  {
    title: "Busel - Digital Marketplace",
    slug: "busel-digital-marketplace",
    description:
      "A collection of high-performing and well-designed Framer templates to set up your website",
    coverImage: buselCover,
    images: [busel1, busel2, busel3, busel4],
    stack: ["Next.js", "MongoDB"],
    date: "Mar 2024",
    preview: "https://busel-v2-render.onrender.com/",

    content: (
      <div className="space-y-4">
        <span className="">
          Built with the Next.js 14 App Router, tRPC, TypeScript, Payload &
          Tailwind
        </span>
        <h1 className="text-4xl lg:text-5xl font-semibold">
          A Modern Fullstack E-Commerce Marketplace for Digital Products
        </h1>

        <p className="text-base lg:text-lg opacity-70">
          We&apos;ve meticulously crafted a comprehensive marketplace using
          Next.js 14, starting from the ground up. This cutting-edge platform
          offers users a seamless browsing experience with a beautifully
          designed landing page and product pages, complete with custom artwork
          to enhance visual appeal. With a full-fledged admin dashboard,
          administrators can efficiently manage the platform while users engage
          in buying and selling products effortlessly. The inclusion of a
          locally persisted shopping cart ensures a convenient shopping
          experience for customers, while authentication through Payload
          guarantees security and privacy. Additionally, our platform provides
          resources for users to learn how to self-host Next.js, empowering them
          with autonomy over their digital presence. Our interface boasts a
          clean and modern UI, leveraging shadcn-ui to deliver an aesthetically
          pleasing experience. Users can expect visually stunning emails for
          sign-up and post-purchase notifications, adding a touch of
          sophistication to their interactions. Moreover, our commitment to
          quality is evident with admins having the capability to verify
          products, maintaining a high standard across the marketplace. With
          every aspect meticulously coded in TypeScript, we ensure robustness
          and scalability, setting a benchmark for excellence in online
          marketplaces. And this is just the tip of the iceberg; our platform
          offers much more, promising an unparalleled user experience and
          endless possibilities for growth and innovation.
        </p>
      </div>
    ),
  },
]

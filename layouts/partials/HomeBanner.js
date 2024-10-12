import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary text-2xl font-bold">{banner.title}</h1>
            <p className="mt-4 text-xl">{markdownify(banner.content)}</p>
            {banner.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            )}
            <img src={banner.image} className="w-[90vw] mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

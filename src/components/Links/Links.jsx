import {
  CompanyIcon,
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
} from "../../assets/index.js";
import { useSearchContext } from "../../provider/useSearchProvider.js";

function Links() {
  const { data } = useSearchContext();
  const { location, blog, twitter_username, company } = data;

  const items = [
    {
      title: location,
      icon: LocationIcon,
      alt: "Location icon",
    },
    {
      title: blog,
      icon: WebsiteIcon,
      alt: "Blog icon",
    },
    {
      title: twitter_username,
      icon: TwitterIcon,
      alt: "Twitter icon",
    },
    {
      title: company,
      icon: CompanyIcon,
      alt: "Company icon",
    },
  ];
  return (
    <>
      {items.map((item, i) => (
        <div className="text-queen-blue dark:text-pure-white" key={i}>
          <div className="flex gap-[13px] md:gap-4">
            <img
              src={item.icon}
              alt={item.alt}
              className={`dark:brightness-0 dark:invert h-5 ${!item.title && "opacity-50 dark:opacity-50"}`}
            />
            <span className="opacity-50">
              {!item.title ? "Not available" : item.title}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Links;

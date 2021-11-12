import React from "react";
import _ from "lodash";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { classNames, htmlToReact, withPrefix, markdownify } from "../utils";

export default function Carousel(props) {
  const settings = {
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("PROPS AT CAROUSEL", props.section)

  let section = _.get(props, "section", null);

  let testimonials = _.get(props, "section.slides", null)

  let bg_color = _.get(section, "background_color", null) || "none";

  return (
    <section
      className={classNames("section", "features", {
        "bg-none": bg_color === "none",
        "bg-primary": bg_color === "primary",
        "bg-secondary": bg_color === "secondary",
        "pt-4": "small",
        "pt-6": "medium",
        "pt-md-7": "large",
        "pb-4": "small",
        "pb-6": "large",
        "pb-md-7": "large",
      })}
    >
      {" "}
      <div
        className={classNames("container", "container--medium", {
          "mb-5": "medium",
          "mb-4": "large",
          "text-center": "center",
          "text-right": "right",
        })}
      >
        <Slider {...settings}>
          {testimonials
            ? testimonials.map((t) => (
                <div>
                  <h3
                    className={classNames("feature__title h3", {
                      "text-center": "center",
                    })}
                  >
                    {t.testimonial_text}
                  </h3>
                  <p className="feature__subtitle">{t.testimonial_giver}</p>
                </div>
              ))
            : null}
        </Slider>
      </div>
    </section>
  );
}

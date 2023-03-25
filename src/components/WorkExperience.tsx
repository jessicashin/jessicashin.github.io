import React from "react";
import { Hyperlink, IconLink } from "./IconButton";

type JobProps = {
  year: string;
  position: string;
  company: string;
  url: string;
  children: React.ReactNode;
};

const Job = (props: JobProps) => (
  <div className="grid gap-x-10 gap-y-3 border-l border-stone-800 pl-4 dark:border-stone-300 lg:grid-cols-2 lg:border-r lg:border-l-0 lg:pr-4">
    <div className="lg:text-right">
      <div className="font-semibold text-stone-600 dark:text-stone-400">
        <div>{props.year}</div>
        <div>{props.position}</div>
      </div>
      <Hyperlink className="md:text-xl md:font-light" href={props.url}>
        {props.company}
      </Hyperlink>
    </div>
    <p>{props.children}</p>
  </div>
);

export default function WorkExperience() {
  return (
    <div className="grid gap-x-16 gap-y-8 lg:gap-x-40 xl:grid-cols-[auto_1fr]">
      <div>
        <IconLink to="/" className="before:mr-2 before:content-['←']">
          Go Home
        </IconLink>
      </div>
      <div className="grid gap-y-10">
        <h2 className="mt-2 -mb-2 text-3xl font-extralight md:text-4xl lg:m-0 lg:text-right">
          My Work Experience
        </h2>
        <Job
          year="2017-2022"
          position="Software Engineer"
          company="Principal Development Group Consulting"
          url="https://pdgc.com/"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit
          quam, semper et quam ac, sodales sollicitudin elit. Nullam sodales
          orci in lacinia euismod. Cras dignissim tortor quis risus congue, at
          feugiat purus rhoncus. In hac habitasse platea dictumst. Nulla vel
          massa urna. Maecenas rutrum lectus in ligula volutpat, pretium aliquet
          urna ullamcorper.
        </Job>
        <Job
          year="2016-2017"
          position="Frontend Developer"
          company="Intelligent Systems Technology Inc"
          url="https://www.intelsystech.com/"
        >
          Donec egestas urna ligula, sit amet facilisis massa condimentum sed.
          Integer maximus justo vel blandit facilisis. Vivamus pellentesque
          vitae erat eu iaculis. Duis pretium arcu at purus laoreet feugiat.
        </Job>
      </div>
    </div>
  );
}

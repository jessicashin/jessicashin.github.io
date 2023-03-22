import React from "react";
import { IconLink } from "./IconButton";

type JobProps = {
  year: string;
  position: string;
  company: string;
  children?: React.ReactNode;
};

const Job = (props: JobProps) => (
  <div className="grid gap-x-10 border-r border-stone-800 pr-4 dark:border-stone-300 lg:grid-cols-2">
    <div className="text-right">
      <div>{props.year}</div>
      <div className="font-bold text-stone-600 dark:text-stone-400">
        {props.position}
      </div>
      <div className="text-3xl font-thin">{props.company}</div>
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
      <div className="grid gap-y-8">
        <h2 className="text-right text-4xl font-thin">My Work Experience</h2>
        <Job
          year="2017-2022"
          position="Software Engineer"
          company="Principal Development Group Consulting"
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
          company="Intelligent Systems Technology, Inc."
        >
          Donec egestas urna ligula, sit amet facilisis massa condimentum sed.
          Integer maximus justo vel blandit facilisis. Vivamus pellentesque
          vitae erat eu iaculis. Duis pretium arcu at purus laoreet feugiat.
        </Job>
      </div>
    </div>
  );
}

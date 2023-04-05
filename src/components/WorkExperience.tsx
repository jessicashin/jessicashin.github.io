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
    <div className="grid gap-y-2">{props.children}</div>
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
          <p>
            I was responsible for leading the frontend development on a variety
            of business- and customer-facing applications with a focus on clean
            visualization of large data sets and intuitive navigation of complex
            workflows.
          </p>
          <p>
            This included a customer portal for 30,000+ songwriters and
            publishers to manage their royalty earnings and the corresponding
            app for business owners to handle the reporting and billing
            associated with music licenses, as well as a video-sharing app to
            assist customer support agents.
          </p>
          <p>
            I also collaborated on large teams to build backend microservices
            and APIs for television licensing and asset management at clients
            including 21st Century Fox and AT&T.
          </p>
        </Job>
        <Job
          year="2016-2017"
          position="Frontend Developer"
          company="Intelligent Systems Technology Inc"
          url="https://www.intelsystech.com/"
        >
          <p>
            I worked alongside a small team of developers and systems engineers
            to build a simulation tool for the U.S. Army Research Laboratory. I
            was responsible for the frontend features including a matrix
            component for defining granular project parameters with a responsive
            grid layout and dynamic cell editing.
          </p>
        </Job>
      </div>
    </div>
  );
}

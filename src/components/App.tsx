import clsx from "clsx";
import React from "react";
import Hyperlink from "./Hyperlink";
import IconButton from "./IconButton";
import WorkExperience from "./WorkExperience";
import ThemeSelect from "./ThemeSelect";

function App() {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
          document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", "#1c1917");
        } else {
          document.documentElement.classList.remove("dark");
          document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", "#e7e5e4");
        }
      }
    });

  const [showJobs, setJobs] = React.useState<boolean>(false);
  const [contentOpacity, setContentOpacity] = React.useState<
    "opacity-0" | "opacity-100"
  >("opacity-100");

  const fadeAnimationClasses = () =>
    clsx("transition-opacity duration-500", contentOpacity);

  const toggleJobs = () => {
    setContentOpacity("opacity-0");
    setTimeout(() => {
      setJobs(!showJobs);
      setTimeout(() => setContentOpacity("opacity-100"));
    }, 500);
  };

  return (
    <div className="container mx-auto px-8 py-6 sm:px-16 sm:py-12 md:px-32 md:py-28">
      <div className="grid gap-x-20 gap-y-8 lg:gap-x-40 xl:grid-cols-[auto_1fr] xl:grid-rows-[auto_1fr] xl:gap-y-12">
        <ThemeSelect className="justify-self-end" />
        <div className="xl:order-first xl:row-span-2">
          <h1 className="text-6xl font-thin">Jessica Shin</h1>
          <h2 className="mt-2 text-3xl font-thin">Software Engineer</h2>
          {!showJobs && (
            <div className={fadeAnimationClasses()}>
              <p className="mt-6 max-w-lg">
                Hi, I'm Jess. I'm a developer and sometimes a designer. Starting
                with a Neopets fan site that I built in 2006, to the first
                enterprise application I developed in 2016, to now with 5+ years
                of experience in the industry, I've always been obsessed with
                the process of creating an engaging and satisfying digital
                experience.
              </p>
              <div className="mt-12">
                I've most recently been working with:
                <ul className="mt-2">
                  {[
                    "TypeScript",
                    "React",
                    "Angular",
                    "Tailwind",
                    "GraphQL",
                    "Node.js",
                  ].map((name) => (
                    <li className="before:mr-2 before:content-['▪']" key={name}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="mt-12 grid gap-2">
                <li>
                  <Hyperlink
                    href="https://www.linkedin.com/in/jessica-shin/"
                    target="_blank"
                  >
                    LinkedIn
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink>Résumé</Hyperlink>
                </li>
                <li>
                  <Hyperlink href="mailto:jessicasyshin@gmail.com">
                    jessicasyshin@gmail.com
                  </Hyperlink>
                </li>
              </ul>
            </div>
          )}
        </div>
        {!showJobs && (
          <div
            className={clsx(
              "flex min-h-[20rem] items-end justify-end bg-gradient-to-b from-stone-300 to-orange-100 p-6 dark:from-cyan-900/50 dark:to-yellow-900/75",
              fadeAnimationClasses()
            )}
          >
            <div
              role="button"
              className="group relative flex flex-col items-end text-6xl font-thin uppercase before:absolute before:top-1 before:left-5 before:content-['→']"
              onClick={() => toggleJobs()}
            >
              {["My Work", "Experience"].map((text, index) => (
                <div
                  className="relative -mb-1 after:absolute after:top-0 after:left-0 after:bottom-0 after:block after:w-0 after:bg-stone-800 after:transition-all after:duration-75 last:mb-0 group-hover:text-stone-300 group-hover:after:w-full dark:after:bg-stone-300 dark:group-hover:text-stone-800"
                  key={index}
                >
                  <div className="relative z-10 pt-1 pr-3 pl-2">{text}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {showJobs && (
        <div
          className={clsx(
            "mt-6 grid gap-x-16 gap-y-6 lg:gap-x-40 xl:grid-cols-[auto_1fr]",
            fadeAnimationClasses()
          )}
        >
          <div>
            <IconButton
              className="before:content-['←']"
              onClick={() => toggleJobs()}
            >
              Go Home
            </IconButton>
          </div>
          <WorkExperience />
        </div>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { Transition } from "@headlessui/react";
import ThemeSelect from "./ThemeSelect";

export default function App() {
  const location = useLocation();
  const outlet = useOutlet();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [displayOutlet, setDisplayOutlet] = useState(outlet);
  const [contentIsShowing, setIsShowing] = useState<boolean>(true);

  useEffect(() => {
    const showContent = location.key === displayLocation.key;
    if (showContent !== contentIsShowing) {
      setTimeout(() => setIsShowing(showContent));
    }
  }, [contentIsShowing, location, displayLocation]);

  return (
    <div className="container mx-auto px-8 py-6 sm:px-16 sm:py-12 md:px-20 md:py-16 xl:px-32 xl:py-28">
      <div className="mb-8 grid gap-y-10 lg:grid-cols-2">
        <ThemeSelect className="justify-self-end lg:order-last" />
        <div>
          <h1 className="text-6xl font-thin">Jessica Shin</h1>
          <h2 className="mt-2 text-3xl font-thin">Software Engineer</h2>
        </div>
      </div>

      <Transition
        appear={true}
        show={contentIsShowing}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => {
          setDisplayLocation(location);
          setDisplayOutlet(outlet);
        }}
      >
        {displayOutlet}
      </Transition>
    </div>
  );
}

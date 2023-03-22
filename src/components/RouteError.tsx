import { IconLink } from "./IconButton";

export default function RouteError() {
  return (
    <div className="grid items-center justify-center pb-10">
      <div className="">
        <div className="mb-6 text-3xl font-thin">
          The page you're looking for doesn't exist.
        </div>
        <IconLink to="/" className="before:mr-2 before:content-['←']">
          Go Home
        </IconLink>
      </div>
    </div>
  );
}

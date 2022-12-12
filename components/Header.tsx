import { Dropdown } from "semantic-ui-react";
import React, { useMemo } from "react";
import { useGlobalContext } from "../pages/context";

export function Header(): JSX.Element {
  const { movies } = useGlobalContext();
  const moviesOptions = useMemo(() => {
    return movies
      .filter(
        (movie, index) =>
          movies.findIndex(
            (movieTarget) => movie.category === movieTarget.category
          ) === index
      )
      .map((movie) => ({
        key: movie.id,
        value: movie.id,
        text: movie.category,
      }));
  }, [movies]);
  return (
    <div>
      <div className="md:flex md:flex-row md:justify-between items-center">
        <h1 className="w-full text-center text-xl md:text-2xl lg:text-3xl my-3 py-3 md:my-0 md:py-0 font-bold leading-normal">
          c4t movie app
        </h1>
        <input
          className="w-full h-fit px-4 py-3 mx-4   placeholder:text-black opacity-70 outline-none font-standard font-light rounded-lg border-2 bg-gray-50"
          placeholder="search movie .."
        />
        <div className="py-3 md:py-0 w-full mx-4">
          <Dropdown
            placeholder="chose category"
            fluid
            multiple
            search
            selection
            options={moviesOptions}
          />
        </div>
      </div>
    </div>
  );
}

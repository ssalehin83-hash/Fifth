


import { useState } from "react";
import type { Ione } from "./types/onetype";

type CardsProps = {
  users:Ione[];
};
const [selectedStacks, setSelectedStacks] = useState<Ione[]>([]);
const Availablecards = ({ users }: CardsProps) => {
    return ( 
    <div className="flex">

  {/* Available Technologies */}
  <div className="grid grid-cols-3 ml-15 gap-y-10 container mx-auto">

    {users.map((user: Ione) => {

      // Check whether this card is already selected
      const isSelected = selectedStacks.some(
        (item) => item.id === user.id
      );

      return (
        <div
          key={user.id}
          className={`w-[275px] rounded-2xl border bg-white p-5 shadow-sm transition
            ${
              isSelected
                ? "border-green-500 opacity-60"
                : "border-gray-200 hover:shadow-md"
            }
          `}
        >

          {/* Top section */}
          <div className="flex items-center justify-between">
            <div className="text-3xl">
              {/* Your icon here */}
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-5 text-xl font-bold text-gray-900">
            {user.name}
          </h2>

          {/* Description */}
          <p className="mt-2 h-[65px] text-sm leading-5 text-gray-500">
            {user.description}
          </p>

          {/* Tags + Rating */}
          <div className="mt-4 flex items-center justify-between text-xs">

            <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
              {user.category}
            </span>

            <span className="font-medium text-gray-700">
              <span className="text-yellow-400">★</span>{" "}
              {user.rating}
            </span>

          </div>

          {/* Button */}
          <button
            disabled={isSelected}
            onClick={() => {
              if (!isSelected) {
                setSelectedStacks([...selectedStacks, user]);
              }
            }}
            className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white transition
              ${
                isSelected
                  ? "cursor-not-allowed bg-green-500"
                  : "bg-[#080D1D] hover:bg-gray-800"
              }
            `}
          >
            {isSelected ? "✓ Added to Stack" : "Add to Stack"}
          </button>

        </div>
      );
    })}

  </div>


  {/* Selected Stacks */}
  <div className="w-[250px] ml-10">

    <h3 className="font-bold text-2xl text-white">
      Selected Stacks
    </h3>

    <div className="mt-5 space-y-3">

      {selectedStacks.map((stack) => (
        <div
          key={stack.id}
          className="rounded-xl bg-white p-4 shadow"
        >
          <h4 className="font-bold">
            {stack.name}
          </h4>

          <p className="text-sm text-gray-500">
            {stack.category}
          </p>
        </div>
      ))}

    </div>

  </div>

</div>
        )           
};

export default Availablecards;
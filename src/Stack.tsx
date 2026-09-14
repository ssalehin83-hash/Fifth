import { useState } from "react";
import type { Ione } from "./types/onetype";

interface AvailableProps {
  users: Ione[];
}

const Availablecards = ({ users }: AvailableProps) => {
  const [selectedStacks, setSelectedStacks] = useState<Ione[]>([]);

  const handleAddToStack = (user: Ione) => {
    console.log("Clicked:", user.name);

    setSelectedStacks((previous) => [...previous, user]);
  };

  return (
    <div className="flex">

      {/* Available cards */}
      <div className="grid grid-cols-3 ml-15 gap-y-10 container mx-auto">

        {users.map((user: Ione) => (
          <div
            key={user.id}
            className="w-[275px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              {user.name}
            </h2>

            <p className="mt-2 h-[65px] text-sm leading-5 text-gray-500">
              {user.description}
            </p>

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
                {user.category}
              </span>

              <span className="font-medium text-gray-700">
                <span className="text-yellow-400">★</span>{" "}
                {user.rating}
              </span>
            </div>

            <button
              type="button"
              onClick={() => handleAddToStack(user)}
              className="mt-4 w-full rounded-lg bg-[#080D1D] py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Add to Stack
            </button>

          </div>
        ))}

      </div>


      {/* Selected Stacks */}
      <div className="ml-10 w-[250px]">

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
  );
};

export default Availablecards;
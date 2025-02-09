"use client";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";
import { FaAlignLeft, FaAlignRight, FaAlignCenter } from "react-icons/fa6";
export const AlignmentIcon = [
  {
    name: "left",
    icon: <FaAlignLeft />,
  },
  {
    name: "center",
    icon: <FaAlignCenter />,
  },
  {
    name: "right",
    icon: <FaAlignRight />,
  },
];

export const TextStyle = [
  {
    name: "bold",
    initial: "B",
  },
  {
    name: "italic",
    initial: "I",
  },
  {
    name: "underline",
    initial: "U",
  },
];
export const StepOne = ({ control, register }: StepProps) => {
  return (
    <section className="font-[montserrat] p-4 ">
      <legend className="font-semibold text-center justify-center">
        Brand Information
      </legend>
      <div className="my-2">
        <p className="text-xs  text-black font-semibold py-3">Title</p>
        <div className=" border-b-2 w-full my-3" />
        <input
          type="text"
          className="border rounded-sm w-full p-2  text-neutral-600 my-2 focus:ring-none focus:outline-none text-sm"
          placeholder="Enter your name"
          {...register("BrandName")}
        />
      </div>

      <div className="my-2">
        <p className="  text-black font-semibold my-3 text-sm">Styles</p>
        <div className=" border-b-2 w-full my-3" />
      </div>
      <div className="flex justify-between items-center">
        {/* placement */}
        <p className="text-xs  mt-8 font-semibold flex items-start">
          Alignment
        </p>
        <div className="flex gap-2 my-3 items-center">
          <Controller
            name="alignment"
            control={control}
            render={({ field }) => (
              <div className="flex gap-2 items-center justify-center">
                {AlignmentIcon.map((item, index) => (
                  <button
                    {...register("alignment")}
                    key={index}
                    type="button"
                    className={`p-2 ${
                      field.value === item.name
                        ? "bg-main-blue"
                        : "bg-main-blue/30"
                    } text-white rounded-md text-sm border-white capitalize`}
                    onClick={() => field.onChange(item.name)}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            )}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs font-semibold w-full">Color</div>
        <div>
          <input
            {...register("color")}
            type="color"
            className="w-[5rem] h-10 rounded-sm"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs font-semibold w-full">Style</div>
        <div className="flex gap-2 ">
          {TextStyle.map((item, index) => (
            <>
              <button
                {...register("style")}
                key={index}
                type="button"
                className={`p-2 ${
                  item.name === "bold"
                    ? "font-bold"
                    : item.name === "italic"
                    ? "italic"
                    : "underline"
                } text-black rounded-md text-sm border-white capitalize`}
                // onClick={() => item}
              >
                {item.initial}
              </button>
            </>
          ))}
        </div>
      </div>
      <div className="">
        <div className="relative mt-6 flex-col flex gay-y-2">
          <div className="text-xs font-semibold">
            <p>Size</p>
          </div>
          <div className="flex gap-2">
            <input
              {...register("fontSize")}
              type="range"
              min="1"
              max="3"
              step="0.1"
              className="w-full  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

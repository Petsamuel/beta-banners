"use client";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";

export const StepOne = ({ control, register }: StepProps) => {
  return (
    <section className="font-[montserrat] p-4 ">
      <legend className="font-semibold text-center justify-center">
        Brand Information
      </legend>
      <div className="my-2">
        <label className="text-xs  text-black font-semibold py-3">Title</label>
        <div className=" border-b-2 w-full my-3" />
        <input
          type="text"
          className="border rounded-sm w-full p-2  text-neutral-600 my-2 focus:ring-none focus:outline-none text-sm"
          placeholder="Enter your name"
          {...register("BrandName")}
        />
      </div>
      <div>
        {/* placement */}
        <label className="text-xs  mt-8 font-semibold">Position</label>
        <div className="flex gap-2 my-3">
          <Controller
            name="alignment"
            control={control}
            render={({ field }) => (
              <div className="flex gap-2">
                {["left", "center", "right"].map((item, index) => (
                  <button
                    {...register("alignment")}
                    key={index}
                    type="button"
                    className={`p-2 ${
                      field.value === item ? "bg-main-blue" : "bg-main-blue/30"
                    } text-white rounded-md text-xs border-white w-[5rem] capitalize`}
                    onClick={() => field.onChange(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-xs font-semibold">Text Color</label>
        <input
          {...register("color")}
          type="color"
          className="w-full h-12 rounded-sm"
        />
      </div>
      <div className="">
        <div className="relative mt-6">
          <label htmlFor="fontSize" className="text-xs font-semibold">
            Font Size
          </label>
          <div className="flex gap-2">
            <i className="text-sm font-medium inline-block">aA</i>

            <input
              {...register("fontSize")}
              type="range"
              min="1"
              max="3"
              step="0.1"
              className="w-full  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
            />
            <i className="text-xl font-medium">aA</i>
          </div>
        </div>
      </div>
    </section>
  );
};

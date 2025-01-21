"use client";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";

export const StepOne = ({ control, register }: StepProps) => {
  return (
    <section className="font-[montserrat] border-2 p-4 shadow-lg mb-4 rounded-lg ">
      <legend className="font-semibold">Brand Information</legend>
      <div>
        <label className="text-xs  text-black font-semibold">Brand Name</label>
        <input
          type="text"
          className="border rounded-lg w-full p-3 outline-main-blue text-neutral-600 my-3"
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
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <div className="flex gap-8 ">
              {[
                "skyblue",
                "yellow",
                "deeppink",
                "indigo",
                "darkorange",
                "black",
                "whitesmoke",
              ].map((item, index) => (
                <div
                  {...register("color")}
                  key={index}
                  type="button"
                  className={`p-2 my-3 lg:rounded-full rounded-lg h-10 w-10  text-white text-[10px] border-white cursor-pointer`}
                  onClick={() => field.onChange(item)}
                  style={{ backgroundColor: item }}
                >
                  {field.value === item && (
                    <span className="text-white inline-flex font-bold text-xl justify-center items-center ">
                      ✔
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        />
      </div>
      <div className="">
        <div className="relative my-6">
          <label htmlFor="fontSize" className="text-xs font-semibold">
            Font Size
          </label>
          <div className="flex gap-2">
            <i className="text-sm font-medium inline-block">aA</i>

            <input
              {...register("fontSize")}
              type="range"
              min="1"
              max="5"
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

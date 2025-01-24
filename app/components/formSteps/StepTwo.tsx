"use client";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";

export const StepTwo = ({ control, register }: StepProps) => {
  return (
    <div className="font-[montserrat] border-2 p-4 shadow-lg mb-4 rounded-lg">
      <legend className="font-semibold">Brand Description</legend>
      <div>
        <label className="text-sm text-black font-semibold">
          Description
        </label>
        <input
          type="text"
          className="border rounded-lg w-full p-3 outline-main-blue text-neutral-600 my-3"
          placeholder="Description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
            maxLength: 30,
          })}
        />
      </div>
      <div>
        {/* placement */}
        <label className="text-xs  mt-8 font-semibold">
          Description Position
        </label>
        <div className="flex gap-2 ">
          <Controller
            name="descriptionAlignment"
            control={control}
            render={({ field }) => (
              <div className="flex gap-2">
                {["left", "center", "right"].map((item, index) => (
                  <button
                    {...register("descriptionAlignment")}
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
        <label className="text-xs  font-semibold">Text Color</label>

        <input
          {...register("descriptionColor")}
          type="color"
          className="w-full h-12 rounded-sm"
        />
      </div>

      <div className="">
        <div className="relative my-6">
          <label htmlFor="descriptionSize" className="text-xs font-semibold">
            Font Size
          </label>
          <div className="flex gap-2">
            <i className="text-sm font-medium inline-block">aA</i>

            <input
              {...register("descriptionSize")}
              type="range"
              min="0"
              max="3"
              step="0.1"
              className="w-full  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
            />
            <i className="text-xl font-medium">aA</i>
          </div>
        </div>
        <div className="relative my-6">
          <label htmlFor="fontHeight" className="text-xs font-semibold">
            Font height
          </label>
          <input
            {...register("fontHeight")}
            type="range"
            min="2"
            max="10"
            step="2"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
          />
        </div>
      </div>
    </div>
  );
};

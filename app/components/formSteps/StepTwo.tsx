"use client";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";
import { useState } from "react";

export const StepTwo = ({ control, register }: StepProps) => {
  const [fontProps, setFontProps] = useState<string>("");
  return (
    <div className=" p-2  mb-4 ">
      <legend className=" font-semibold">Brand Description</legend>
      <div>
        <label className="text-xs text-black font-semibold">Description</label>
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
      <div className="mt-4 w-full">
        <label className="text-xs  font-semibold">Text Color</label>

        <input
          {...register("descriptionColor")}
          type="color"
          className="w-full h-12 rounded-sm"
        />
      </div>

      <div className="relative my-6 ">
        <div className="flex gap-4">
          {["Font Size", "Font Gap"].map((val, index) => (
            // <p key={index}>val</p>
            <div
              key={index}
              className={`text-xs font-semibold flex gap-x-4  hover:underline underline-offset-2 cursor-pointer ${
                fontProps ? "underline-offset-2" : ""
              }`}
              onClick={() => setFontProps(val)}
            >
              <p> {val}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 w-full">
          {fontProps === "Font Size" ? (
            <div className="relative my-6 w-full">
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
          ) : (
            <div className="relative my-6 w-full">
              <div className="flex gap-2 items-center ">
                <i className="text-sm font-medium inline-block">▲</i>
                <input
                  {...register("fontHeight")}
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
                />
                <i className="text-sm font-medium inline-block">▼</i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

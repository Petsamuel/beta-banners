"use client";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";
// import { useState } from "react";
import { AlignmentIcon } from "./StepOne";
import { TextStyle } from "./StepOne";

export const StepTwo = ({ control, register }: StepProps) => {
  // const [fontProps, setFontProps] = useState<string>("");
  return (
    <div className="p-4 font-[montserrat] ">
      <legend className=" font-semibold text-center justify-center">
        Brand Description
      </legend>
      <div>
        <label className="text-xs text-black font-semibold">Description</label>
        <div className=" border-b-2 w-full my-3" />
        <input
          type="text"
          className="border rounded-sm w-full p-2  text-neutral-600 my-2 focus:ring-none focus:outline-none text-sm"
          placeholder="Description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
            maxLength: 30,
          })}
        />
      </div>
      <div className="my-2">
        <p className="  text-black font-semibold my-3 text-sm">Styles</p>
        <div className=" border-b-2 w-full my-3" />
      </div>
      <div className="flex justify-between items-cente">
        {/* placement */}
        <p className="text-xs  mt-8 font-semibold flex items-start">
          Alignment
        </p>
        <div className="flex gap-2 my-3 items-center">
          <Controller
            name="descriptionAlignment"
            control={control}
            render={({ field }) => (
              <div className="flex gap-2 items-center justify-center">
                {AlignmentIcon.map((item, index) => (
                  <button
                    {...register("descriptionAlignment")}
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
        <label className="text-xs  font-semibold"> Color</label>
        <div>
          <input
            {...register("descriptionColor")}
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
      <div className="relative mt-4 text-xs">
        <p className="text-xs  mt-2 font-semibold flex items-start">
          Font Size{" "}
        </p>
        <div className="relative my-2 w-full">
          <div className="flex gap-2">
            <input
              {...register("descriptionSize")}
              type="range"
              min="0"
              max="3"
              step="0.1"
              className="w-full  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
            />
          </div>
        </div>
        <div className="relative mt-4 w-full text-xs">
          <p className="text-xs  my-4 font-semibold flex items-start">
            Font Height
          </p>
          <div className="flex gap-2 items-center ">
            <input
              {...register("fontHeight")}
              type="range"
              min="0"
              max="5"
              step="0.1"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

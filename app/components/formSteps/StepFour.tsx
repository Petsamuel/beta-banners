"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const StepFour = ({ control, register }: StepProps) => {
  const BackgroundGradientType = [
    "",
    "linear",
    "radial",
    "conic",
    "repeating-linear",
    "repeating-radial",
  ];
  const PatternType = [
    "bg-grid-black",
    "bg-triangles-black",
    "bg-dot-black",
    "bg-diagonal-lines-black",
    "bg-cross-black",
    "bg-honeycomb-black",
    "bg-circuit-black",
    "bg-microchip-black",
    "bg-matrix-black",
    "bg-crosshatch-black",
  ];
  return (
    <div className="  font-[montserrat]  p-4  mb-4  ">
      <div className="font-semibold text-center justify-center">
        <p>BackGround Design</p>
      </div>

      <div>
        {/* Background Color */}
        <div>
          {/* Background Gradient Type */}
          <div className="mt-8">
            <label
              htmlFor="selectedGradientType"
              className=" font-semibold text-xs"
            >
              Gradient Type
            </label>
            <div className=" border-b-2 w-full my-3" />
            <select
              {...register("selectedGradientType")}
              className="p-2 bg-main-blue/10 hover:bg-main-blue/20 text-gray-700 text-xs border-white w-full capitalize"
            >
              {BackgroundGradientType.map((value, index) => (
                <option value={value} key={index}>
                  {value === "" ? "Select Gradient Type" : value}
                </option>
              ))}
            </select>
          </div>

          {/* Gradient Color Picker */}
          <div className="flex flex-col gap-2 mt-4 w-full">
            <label className="text-xs  mt-8 font-semibold">
              {" "}
              Gradient Color Picker
            </label>
            <div className=" border-b-2 w-full my-3" />
            <div className="flex  flex-col gap-4 w-full text-xs">
              <div className="w-full flex justify-between items-center">
                <p>Start</p>
                <div>
                  <input
                    defaultValue="#ffff"
                    type="color"
                    {...register("colorStart")}
                    className="w-[5rem] h-10 rounded-sm"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>End</p>
                <div>
                  <input
                    defaultValue="#252525"
                    type="color"
                    {...register("colorEnd")}
                    className="w-[5rem] h-10 rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* background pattern */}
          <div className="my-6">
            <label className="text-xs  mt-8 font-semibold">
              Background Pattern
            </label>
            <div className=" border-b-2 w-full my-3" />
            <div className="my-3">
              <Controller
                name="patterns"
                control={control}
                render={({ field }) => (
                  <select
                    {...register("patterns")}
                    className="p-2 bg-main-blue/10 hover:bg-main-blue/20 text-gray-700 rounded-md text-xs border-white w-full capitalize"
                    onChange={(e) => {
                      const selectedOptions = Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      );
                      field.onChange(selectedOptions);
                    }}
                  >
                    {PatternType.map((pattern, index) => (
                      <option
                        key={index}
                        value={pattern}
                        selected={(field.value || []).includes(pattern)}
                      >
                        {pattern}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface PreviewProps {
  gradientStyles: any;
  selectedGradientTypes: string;
  patternList: any;
  watch: any;
  color: string;
  alignment: string;
  descriptionAlignment: string;
  descriptionColor: string;
  bannerPreview?: string;
}

export const Preview = ({
  gradientStyles,
  selectedGradientTypes,
  patternList,
  watch,
  // alignment,
  color,
  descriptionAlignment,
  descriptionColor,
}: // bannerPreview
PreviewProps) => {
  return (
    <div
      className={clsx("flex relative justify-center overflow-hidden w-full ")}
    >
      {/* preview */}
      <div
        id="banner-preview"
        style={{
          background: gradientStyles[selectedGradientTypes],
        }}
        className={clsx(
          "bg-white  text-black p-8 rounded-xl border dark:border-none dark:bg-gray-50 shadow-lg relative "
        )}
      >
        <span className="absolute -left-5 top-2 px-4 font-[montserrat] text-sm -rotate-45 bg-main-blue dark:bg-main-blue/30 text-white z-0">
          Preview
        </span>

        <div
          className={` flex flex-col mt-4 text-4xl font-black capitalize text-balance  text-black z-10 justify-center items-center`}
        >
          {patternList && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center ">
              {(Array.isArray(patternList) ? patternList : [patternList]).map(
                (patternClass, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "absolute inset-0 opacity-50",
                      patternClass
                    )}
                  />
                )
              )}

              <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black/20 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
          )}
          <div className={` z-10`}>
            <h1
              style={{ fontSize: `${watch("fontSize")}rem`, color: `${color}` }}
              className="w-fit text-pretty"
            >
              {watch("BrandName")}
            </h1>

            <div
              style={{
                fontSize: `${watch("descriptionSize")}rem`,
                marginTop: `${watch("fontHeight")}rem`,
                color: `${descriptionColor}`,
              }}
              className={twMerge(
                clsx(
                  "text-sm w-full max-w-full overflow-hidden break-words leading-snug flex flex-col",
                  {
                    "text-left justify-start items-left":
                      descriptionAlignment === "left",
                    "text-right justify-end items-right":
                      descriptionAlignment === "right",
                    "text-center justify-center items-center":
                      !descriptionAlignment ||
                      descriptionAlignment === "center",
                  }
                )
              )}
            >
              {watch("description")}

              <span className="inline-flex gap-3 my-4 flex-wrap">
                {watch("tools")?.map(
                  (IconComponent: JSX.Element[], index: number) => (
                    <span key={index} className="w-8 h-8 text-main-blue">
                      {IconComponent}
                    </span>
                  )
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>{/* TODO: banner-size  */}</div>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX, useState } from "react";
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
  alignment,
  color,
  descriptionAlignment,
  descriptionColor,
}: // bannerPreview
PreviewProps) => {
  type BannerSizeType = "twitter" | "facebook" | "youtube";
  const [bannerSize] = useState<BannerSizeType>("twitter");

  const bannerDimensions = {
    twitter: { width: 1500, height: 500, aspectRatio: "3 / 1" },
    facebook: { width: 820, height: 312, aspectRatio: "2.63 / 1" },
    youtube: { width: 2560, height: 1440, aspectRatio: "16 / 9" },
  };

  const selectedBanner = bannerDimensions[bannerSize];
  return (
    <div
      className={clsx(
        "flex flex-col relative justify-center overflow-hidden w-full"
      )}
    >
      {/* preview */}
      <div
        id="banner-preview"
        style={{
          background: gradientStyles[selectedGradientTypes],
          width: "100%",
          aspectRatio: selectedBanner.aspectRatio,
          maxWidth: `${selectedBanner.width}px`,
        }}
        className={clsx(
          "bg-white text-black p-8 rounded-xl border dark:border-none dark:bg-gray-50 shadow-lg relative overflow-hidden"
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
          <div className={` z-10 w-full`}>
            <h1
              style={{ fontSize: `${watch("fontSize")}rem`, color: `${color}` }}
              className={twMerge(
                clsx(
                  "text-pretty overflow-hidden leading-snug flex flex-col h-full",
                  {
                    "text-left justify-start items-left": alignment === "left",
                    "text-right justify-end items-right": alignment === "right",
                    "text-center justify-center items-center":
                      !alignment || alignment === "center",
                  }
                )
              )}
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
                  "text-sm w-full  overflow-hidden break-words leading-snug flex flex-col",
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

              <span
                className={clsx("flex gap-3 my-4 flex-wrap w-full", {
                  "text-left justify-start items-left":
                    descriptionAlignment === "left",
                  "text-right justify-end items-right":
                    descriptionAlignment === "right",
                  "text-center justify-center items-center":
                    !descriptionAlignment || descriptionAlignment === "center",
                })}
              >
                {watch("tools")?.map(
                  (IconComponent: JSX.Element[], index: number) => (
                    <span key={index} className={"w-8 h-8 text-main-blue"}>
                      {IconComponent}
                    </span>
                  )
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

"use client";
import React, { JSX, useState } from "react";
import { Controller } from "react-hook-form";
import { StepProps } from "../../types/useType";
import { getToolsForProfession, Tool } from "../static/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const StepThree = ({ control, register, watch }: StepProps) => {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const PROFESSION_CATEGORIES = [
    "Development",
    "Design",
    "Data",
    "Infrastructure",
    "Management",
    "Content",
  ];

  const handleToolClick = (tool: Tool) => {
    setSelectedTools((prevSelectedTools) => {
      const isSelected = prevSelectedTools.includes(tool.name);
      const updatedTools = isSelected
        ? prevSelectedTools.filter((name) => name !== tool.name)
        : [...prevSelectedTools, tool.name];
      return updatedTools;
    });
  };

  return (
    <div className="overflow-y-auto font-[montserrat] p-2 mb-4 ">
      <div className="flex flex-col gap-2 my-3">
        <label className="text-xs  mt-8 font-semibold">
          Profession Category
        </label>
        <div className="flex gap-2 my-3">
          <Controller
            name="skills"
            defaultValue={["Design"]}
            control={control}
            render={({ field }) => (
              <div className="flex gap-2 flex-wrap">
                {PROFESSION_CATEGORIES.map((skill, index) => (
                  <button
                    {...register("skills")}
                    key={index}
                    type="button"
                    className={`p-2 ${
                      (field.value || []).includes(skill)
                        ? "bg-main-blue text-white"
                        : "bg-main-blue/10 hover:bg-main-blue/20"
                    } text-gray-700 rounded-md text-xs border-white w-auto px-4 capitalize`}
                    onClick={() => {
                      const currentValue = field.value || [];
                      const updatedSkills = currentValue.includes(skill)
                        ? currentValue.length > 1
                          ? currentValue.filter(
                              (item: string) => item !== skill
                            )
                          : currentValue
                        : [...currentValue, skill];
                      field.onChange(updatedSkills);
                    }}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            )}
          />
        </div>
      </div>

      <div>
        <div className="space-y-2">
          <label className="text-xs font-semibold">Tools & Technologies</label>
          <Controller
            name="tools"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Swiper spaceBetween={10} slidesPerView="auto" className="w-full">
                <div className="flex flex-wrap gap-2">
                  {getToolsForProfession(watch("skills"))?.map(
                    (tool: Tool, index: number) => {
                      const IconComponent = tool.icon;
                      const isSelected = selectedTools.includes(tool.name);
                      return (
                        <SwiperSlide key={index} className="!w-auto">
                          <button
                            type="button"
                            key={index}
                            className={`
                    flex items-center gap-2 px-4 py-2 rounded-md text-xs
                    transition-all duration-200
                    ${
                      isSelected
                        ? "bg-main-blue text-white"
                        : "bg-main-blue/10 text-gray-700 hover:bg-main-blue/20"
                    }
                  `}
                            onClick={() => {
                              handleToolClick(tool);
                              const currentValue = field.value || [];
                              const updatedTools = currentValue.some(
                                (el: JSX.Element) => el.type === tool.icon
                              )
                                ? currentValue.filter(
                                    (el: JSX.Element) => el.type !== tool.icon
                                  )
                                : [
                                    ...currentValue,
                                    <tool.icon
                                      key={index}
                                      className="w-4 h-4"
                                    />,
                                  ];
                              field.onChange(updatedTools);
                            }}
                          >
                            {IconComponent && (
                              <IconComponent
                                className={`w-4 h-4 ${
                                  isSelected ? "text-white" : "text-gray-600"
                                }`}
                              />
                            )}
                            <span>{tool.name}</span>
                          </button>
                        </SwiperSlide>
                      );
                    }
                  )}
                </div>
              </Swiper>
            )}
          />
        </div>
      </div>

      <div>
        <label className="text-xs  mt-8 font-semibold">Icon Color</label>
        <input
          {...register("iconColor")}
          type="color"
          className="w-full h-12 rounded-sm"
        />
      </div>
      <div>
        <div className="relative my-6">
          <label htmlFor="iconSize" className="text-xs font-semibold">
            Font Size
          </label>
          <div className="flex gap-2">
            <i className="text-sm font-medium inline-block">aA</i>

            <input
              {...register("iconSize")}
              type="range"
              min="0"
              max="3"
              step="0.1"
              className="w-full  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-3"
            />
            <i className="text-xl font-medium">aA</i>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import pic from "@/app/public/man-working-on-laptop.png";
import TabButton from "./tabbutton";


type TabData = {
  title: string;
  id: string;
  content:React.ReactNode;
};

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Nextjs</li>
        <li>Tailwind CSS</li>
        <li>Typescript</li>
        <li>UI/UX design</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Govt college formen (2022)</li>
        <li>Dawood University of Engineering and technology (2022-present)</li>
      </ul>
    ),
  },
  {
    title: "Courses",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Cloud Applied Generative AI Engineer</li>
        <li>Prompt Engineering</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();


  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white py-10 md:py-0" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={pic} alt="About me" className="hidden md:flex w-[650px] h-[500px]"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
          A passionate frontend developer with a strong focus on building modern, responsive, and dynamic web applications. With expertise in Next.js, TypeScript, Tailwind CSS, and the Shadcn UI library, I specialize in creating intuitive and visually appealing user interfaces that deliver seamless user experiences. I am dedicated to continuous learning and staying updated with the latest frontend technologies to create the best possible user experiences. 
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-7">{selectedTab?.content}</div>
        </div>
      </div>
    </section>
  );
};


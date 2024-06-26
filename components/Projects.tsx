"use client";

import React from "react";
import { SectionHeading } from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { Project } from "./Project";
import { useSectionInView } from "@/lib/hooks";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

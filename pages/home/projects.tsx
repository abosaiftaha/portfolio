import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useWindowSize } from "../../hooks/useWindowResize";

interface ProjectsProps {}

const ProjectsStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 12vw;

  .title-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .title {
      font-size: 30px;
      font-weight: 600;
    }

    .progress-bar {
      margin-top: 10px;
      position: relative;
      width: 100px;
      height: 3px;
      background-color: ${({ theme }) => `${theme.colors.grey}27`};

      .done {
        width: 20px;
        height: 3px;
        position: absolute;
        right: 0;
        top: 0;
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .projects-row {
    overflow-x: hidden;
    display: flex;
    margin-left: 12vw;
    .project {
      height: 300px;
      width: 600px;
      margin-right: 25px;
      background: #0000003a;
    }
  }
`;

const Projects: FC<ProjectsProps> = () => {
  const x = useSpring(0, {
    stiffness: 300,
    damping: 200,
  });
  const progressWidth = useTransform(x, [-1000, 500], [0, 100]);
  const projectsScale = useTransform(x, [500, 400], [1, 1.1]);

  const [gotScaled, setGotScaled] = useState(false);

  useEffect(() => {
    x.onChange(() => {
      x.get() > 400 ? setGotScaled(false) : setGotScaled(true);
    });
  }, [x]);

  return (
    <ProjectsStyles>
      <div className="title-row">
        <div className="title">Projects</div>
        <div className="progress-bar">
          <motion.div
            style={{ width: progressWidth }}
            className="done"
          ></motion.div>
        </div>
      </div>
      <motion.div
        style={{ x, scale: projectsScale }}
        drag="x"
        dragPropagation
        dragConstraints={{ left: -1000, right: 500 }}
        dragElastic={0.05}
        // layout
        // dragMomentum={false}
        // dragTransition={{ power: 0.07 }}
        className="projects-row drag"
      >
        <div className="project drag">Project 1</div>
        <div className="project drag">Project 2</div>
        <div className="project drag">Project 3</div>
        <div className="project drag">Project 4</div>
      </motion.div>
    </ProjectsStyles>
  );
};

export default Projects;

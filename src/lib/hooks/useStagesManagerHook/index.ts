import { useState, useCallback } from "react";
import { Stage } from "lib/types";
import { moviesStages } from "lib/constants/stages/movies";
import { enumeratedColorStages } from "lib/constants/stages/enumeratedColors";

type UseStagesManagerHookReturn = {
  nextStageGroup: () => void;
  nextStage: () => void;
  currentStage: Stage;
};

const stageGroups: Stage[][] = [enumeratedColorStages, moviesStages];

export const useStagesManagerHook = (): UseStagesManagerHookReturn => {
  const [currentStageGroup, setCurrentStageGroup] = useState<Stage[]>(
    stageGroups[0]
  );
  const [currentStage, setCurrentStage] = useState<Stage>(currentStageGroup[0]);

  const nextStageGroup = useCallback(() => {
    let nextStageGroup;
    const currentIndex = stageGroups.indexOf(currentStageGroup);

    if (currentIndex === stageGroups.length - 1) {
      nextStageGroup = stageGroups[0];
    } else {
      nextStageGroup = stageGroups[currentIndex + 1];
    }

    setCurrentStageGroup(nextStageGroup);
    setCurrentStage(nextStageGroup[0]);
  }, [currentStageGroup, setCurrentStageGroup, setCurrentStage]);

  const nextStage = useCallback(() => {
    const currentIndex = currentStageGroup.indexOf(currentStage);

    if (currentIndex === currentStageGroup.length - 1) {
      nextStageGroup();
    } else {
      const nextDataset = currentStageGroup[currentIndex + 1];
      setCurrentStage(nextDataset);
    }
  }, [currentStage, currentStageGroup, setCurrentStage, nextStageGroup]);

  return {
    currentStage,
    nextStage,
    nextStageGroup,
  };
};

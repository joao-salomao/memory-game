import { useState, useCallback } from "react";
import { Stage, StageGroup } from "lib/types";
import { moviesStages } from "lib/constants/stages/movies";
import { enumeratedColorStages } from "lib/constants/stages/enumeratedColors";

type UseStagesManagerHookReturn = {
  nextStageGroup: () => void;
  nextStage: () => void;
  currentStage: Stage;
  currentStageGroup: StageGroup;
};

const stageGroups: StageGroup[] = [enumeratedColorStages, moviesStages];

export const useStagesManagerHook = (): UseStagesManagerHookReturn => {
  const [currentStageGroup, setCurrentStageGroup] = useState<StageGroup>(
    stageGroups[0]
  );
  const [currentStage, setCurrentStage] = useState<Stage>(
    currentStageGroup.stages[0]
  );

  const nextStageGroup = useCallback(() => {
    let nextStageGroup;
    const currentIndex = stageGroups.indexOf(currentStageGroup);

    if (currentIndex === stageGroups.length - 1) {
      nextStageGroup = stageGroups[0];
    } else {
      nextStageGroup = stageGroups[currentIndex + 1];
    }

    setCurrentStageGroup(nextStageGroup);
    setCurrentStage(nextStageGroup.stages[0]);
  }, [currentStageGroup, setCurrentStageGroup, setCurrentStage]);

  const nextStage = useCallback(() => {
    const currentIndex = currentStageGroup.stages.indexOf(currentStage);

    if (currentIndex === currentStageGroup.stages.length - 1) {
      nextStageGroup();
    } else {
      const nextStage = currentStageGroup.stages[currentIndex + 1];
      setCurrentStage(nextStage);
    }
  }, [currentStage, currentStageGroup, setCurrentStage, nextStageGroup]);

  return {
    currentStage,
    currentStageGroup,
    nextStage,
    nextStageGroup,
  };
};

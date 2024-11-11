import { DuckState } from "@/utils/enum/DuckState";
import ChildEnter from "@/app/dashboard/ChildEnter";
import ChildDetection from "@/app/dashboard/ChildDetection";
import SeniorEnter from "@/app/dashboard/SeniorEnter";
import SeniorDetection from "@/app/dashboard/SeniorDetection";
import Sleep from "@/app/dashboard/Sleep";

/**
 * ダックの状態によって表示するコンポーネントを変更
 */
export const useChangeComponent = (duckState: DuckState) => {

  if (duckState === DuckState.CHILD_ENTER) {
    return <ChildEnter/>;
  }　else if (duckState === DuckState.CHILD_DETECTION) {
    return <ChildDetection/>;
  } else if (duckState === DuckState.SLEEP) {
    return <Sleep/>;
  } else if (duckState === DuckState.SENIOR_ENTER) {
    return <SeniorEnter/>;
  } else if (duckState === DuckState.SENIOR_DETECTION) {
    return <SeniorDetection/>;
  }else {
    return <ChildEnter/>;
  }
}
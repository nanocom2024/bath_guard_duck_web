import ChildEnter from "@/app/dashboard/ChildEnter";
import {DuckState} from "@/utils/enum/DuckState";
import ChildDetection from "@/app/dashboard/ChildDetection";
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
  } else {
    return <ChildEnter/>;
  }
}
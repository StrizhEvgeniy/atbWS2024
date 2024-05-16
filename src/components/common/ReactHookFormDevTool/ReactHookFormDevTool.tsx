import { FC, lazy, Suspense } from "react";

import { DevtoolUIProps } from "@hookform/devtools/dist/devToolUI";

import styles from "./ReactHookFormDevTool.module.scss";

const LazyDevTool = lazy(async () => {
  // if (process.env.NODE_ENV !== 'development') return { default: () => null }
  return await import("@hookform/devtools").then((module) => ({
    default: module.DevTool,
  }));
});

export const ReactHookFormDevTool: FC<DevtoolUIProps> = (props) => (
  <Suspense>
    <div className={styles.root}>
      <LazyDevTool {...props} />
    </div>
  </Suspense>
);

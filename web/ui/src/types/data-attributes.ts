export type DataAttributes = {
  /*
   * A testing id used in e2e testing
   */
  "data-testid"?: string;
  [key: `data-${string}`]: string | undefined;
};

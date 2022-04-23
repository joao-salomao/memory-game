export const awaitFor = (
  callback: () => void,
  timeout: number
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, timeout);
  });
};

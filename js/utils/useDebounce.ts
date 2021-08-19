export function useDebounce(callback: CallableFunction, delay: number = 200) {
  let timer: NodeJS.Timeout | null;

  return () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
}

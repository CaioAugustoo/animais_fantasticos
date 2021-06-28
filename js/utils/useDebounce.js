let timer;
export function useDebounce(callback, delay = 200) {
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
}

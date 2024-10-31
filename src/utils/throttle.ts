export function throttle(func: () => void, ms: number) {
  let isThrottled = false;
  return function () {
    if (isThrottled) return;
    isThrottled = true;
    func.apply(this, arguments);
    setTimeout(() => (isThrottled = false), ms);
  };
}

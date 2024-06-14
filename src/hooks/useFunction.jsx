function isEmpty(obj) {
  if (obj === null) return true;
  if (obj === undefined) return true;
  return Object.keys(obj).length === 0;
}
function useFunction() {
  return {
    isEmpty,
  };
}
export default useFunction;

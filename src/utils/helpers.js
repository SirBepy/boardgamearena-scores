export const getPercentage = (base, value) => {
  return ((value / base) * 100).toFixed(1) + "%";
};

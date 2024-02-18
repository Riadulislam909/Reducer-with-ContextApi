export const getNextId = (data) => {
  const maxId = data.reduce(
    (prev, curv) => (prev && prev.id > curv.id ? prev.id : curv.id),
    0
  );
  return maxId + 1;
};

function toPartitions(size) {
  let partition = [];

  return function (acc, v) {
    partition.push(v);

    if (partition.length === size) {
      acc.push(partition);
      partition = [];
    }

    return acc;
  };
}

export function partition(list, size) {
  return list.reduce(toPartitions(size), []);
}

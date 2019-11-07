export interface Sorter {
  property: string,
  direction: 'ASC' | 'DESC',
}

export function sort<T>(data: T[], sorter: Sorter) {
  return data.sort((record1: T, record2: T) => {
    const prop1 = record1[sorter.property],
          prop2 = record2[sorter.property];

    if (sorter.direction === 'DESC') return (prop1 < prop2) ? 1 : ((prop1 > prop2) ? -1 : 0);
    return (prop1 < prop2) ? -1 : ((prop1 > prop2) ? 1 : 0);
  })
}
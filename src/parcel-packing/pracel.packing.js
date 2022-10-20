export default function parcelPacking(
  maxBeltSize,
  maxWeight,
  maxSideLenght,
  items
) {
  const [width, height, length] = [
    items.length,
    items.height,
    items.width,
  ].sort((a, b) => b - a);
  const itemBeltSize = beltSize(width, height, length);
  if (
    itemBeltSize > maxBeltSize ||
    items.weight > maxWeight ||
    width > maxSideLenght
  )
    return null;

  let total = 0;
  const itemsPerPackage = [];
  while (items.total > 0) {
    let currentBeltSize = itemBeltSize;
    let itemsInPackage = 0;
    let currentWeight = items.weight;
    while (
      currentWeight <= maxWeight &&
      currentBeltSize <= maxBeltSize &&
      items.total > 0
    ) {
      currentWeight += items.weight;
      currentBeltSize += length;
      itemsInPackage++;
      items.total--;
    }
    itemsPerPackage.push(itemsInPackage);
    total++;
  }
  return {
    total,
    itemsPerPackage,
  };
  // please fill out the rest :)
}

const beltSize = (width, height, length) => 2 * (width + height) + length;

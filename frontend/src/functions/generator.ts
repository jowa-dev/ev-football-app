/* eslint-disable @typescript-eslint/no-explicit-any */
export function teamGenerate(items: any[]) {
  const shuffledPlayers = [...items].sort(() => Math.random() - 0.5);
  const x = shuffledPlayers.length;

  if (x === 0) {
      console.log("Array 1 Total Rating: 0");
      console.log("Array 2 Total Rating: 0");
      return { array1: [], array2: [] };
  }

  const targetItemsInArray1 = Math.floor(x / 2);
  const targetItemsInArray2 = Math.ceil(x / 2);

  const totalRatingSum = shuffledPlayers.reduce((sum: any, item: { rating: any; }) => sum + item.rating, 0);

  const dp = new Map();
  const path = new Map();

  dp.set(`0,0,0`, true);
  path.set(`0,0,0`, null);

  for (let i = 0; i < x; i++) {
      const item = shuffledPlayers[i];
      const currentStates = new Map(dp);

      for (const stateKey of currentStates.keys()) {
          const [prevItemIdx, prevCount1, prevSum1] = stateKey.split(',').map(Number);

          if (prevItemIdx !== i) {
              continue;
          }

          const newCount1_arr1 = prevCount1 + 1;
          const newSum1_arr1 = prevSum1 + item.rating;
          const nextItemIdx = i + 1;

          if (newCount1_arr1 <= targetItemsInArray1) {
              const newStateKey = `${nextItemIdx},${newCount1_arr1},${newSum1_arr1}`;
              if (!dp.has(newStateKey)) {
                  dp.set(newStateKey, true);
                  path.set(newStateKey, { prevKey: stateKey, choice: 0 });
              }
          }

          const prevCount2 = prevItemIdx - prevCount1;
          const newCount2_arr2 = prevCount2 + 1;

          if (newCount2_arr2 <= targetItemsInArray2) {
              const newStateKey = `${nextItemIdx},${prevCount1},${prevSum1}`;
              if (!dp.has(newStateKey)) {
                  dp.set(newStateKey, true);
                  path.set(newStateKey, { prevKey: stateKey, choice: 1 });
              }
          }
      }
  }

  let minDiff = Infinity;
  let bestFinalStateKey = null;

  for (const stateKey of dp.keys()) {
      const [finalItemIdx, finalCount1, finalSum1] = stateKey.split(',').map(Number);
      const finalCount2 = finalItemIdx - finalCount1;

      if (finalItemIdx === x &&
          finalCount1 === targetItemsInArray1 &&
          finalCount2 === targetItemsInArray2)
      {
          const finalSum2 = totalRatingSum - finalSum1;
          const currentDiff = Math.abs(finalSum1 - finalSum2);

          if (currentDiff < minDiff) {
              minDiff = currentDiff;
              bestFinalStateKey = stateKey;
          }
      }
  }

  if (!bestFinalStateKey) {
      console.warn("Could not find a valid split based on constraints.");
      return null;
  }

  const array1 = [];
  const array2 = [];
  let currentKey = bestFinalStateKey;
  let currentItemIndex = x - 1;

  while (currentKey && path.get(currentKey)) {
      const { prevKey, choice } = path.get(currentKey);

      const item = shuffledPlayers[currentItemIndex];

      if (choice === 0) {
          array1.unshift(item);
      } else {
          array2.unshift(item);
      }

      currentKey = prevKey;
      currentItemIndex--;
  }

  const sum1 = array1.reduce((s, item) => s + item.rating, 0);
  const sum2 = array2.reduce((s, item) => s + item.rating, 0);

  // console.log("Array 1 Total Rating:", sum1);
  // console.log("Array 2 Total Rating:", sum2);
  // console.log("Difference in Ratings:", Math.abs(sum1 - sum2));
  // console.log("Array 1 Item Count:", array1.length);
  // console.log("Array 2 Item Count:", array2.length);

  return { array1, array2, teamOneRating: sum1, teamTwoRating: sum2 };
}
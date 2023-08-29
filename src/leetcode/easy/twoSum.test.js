//ex1
//Input: number = [2, 7, 11, 15], target = 9
//Output: number = [0, 1]

//ex2
//Input: number = [3, 2, 4], target = 6
//Output: number = [1, 2]

//ex3
//Input: number = [3, 3], target = 6
//Output: number = [0, 1]

// 시간복잡도: O(n)
// 공간복잡도: O(n)
function solution(nums, target) {
  const indices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in indices) {
      const j = indices[complement];
      return [j, i];
    }
    indices[nums[i]] = i;
  }
}

describe('solution', () => {
  it('test', () => {
    expect(solution([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(solution([3, 2, 4], 6)).toEqual([1, 2]);
    expect(solution([3, 3], 6)).toEqual([0, 1]);
  });
});

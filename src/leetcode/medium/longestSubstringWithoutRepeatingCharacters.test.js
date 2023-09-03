// ex1
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.

// ex2
//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.

// ex3
//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
//Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  const chars = new Set();
  let start = 0;
  let end = 0;

  while (end < s.length) {
    if (chars.has(s[end])) {
      chars.delete(s[start]);
      start++;
    } else {
      chars.add(s[end]);
      end++;
      max = Math.max(chars.size, max);
    }
  }

  return max;
};

describe('solution', () => {
  it('abcabcbb 문자열에서 반복되지 않는 가장 긴 부분 문자열의 길이는 3이어야 한다.', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('bbbbb 문자열에서 반복되지 않는 가장 긴 부분 문자열의 길이는 1이어야 한다.', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('pwwkew 문자열에서 반복되지 않는 가장 긴 부분 문자열의 길이는 3이어야 한다.', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});

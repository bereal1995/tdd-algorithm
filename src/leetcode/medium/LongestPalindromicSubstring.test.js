//Example 1:

//Input: s = "babad"
//Output: "bab"
//Explanation: "aba" is also a valid answer.
//Example 2:

//Input: s = "cbbd"
//Output: "bb"

//Constraints:

//1 <= s.length <= 1000
//s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxStart = 0;
  let maxEnd = 0;

  for (let i = 0; i < s.length; i++) {
    let start = i;
    let end = i;

    while (0 <= start && end < s.length && s[start] === s[end]) {
      if (end - start > maxEnd - maxStart) {
        maxStart = start;
        maxEnd = end;
      }
      start--;
      end++;
    }

    start = i;
    end = i + 1;

    while (0 <= start && end < s.length && s[start] === s[end]) {
      if (end - start > maxEnd - maxStart) {
        maxStart = start;
        maxEnd = end;
      }
      start--;
      end++;
    }
  }

  return s.slice(maxStart, maxEnd + 1);
};

describe('solution', () => {
  it('babad 문자열에서 가장 긴 팰린드롬 부분 문자열은 bab 또는 aba이어야 한다.', () => {
    expect(longestPalindrome('babad')).toMatch(/^(bab|aba)$/);
  });

  it('cbbd 문자열에서 가장 긴 팰린드롬 부분 문자열은 bb이어야 한다.', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  });
});

// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  s = s.reverse();
};

/* Recursive solution */

var swap = function (s, p0, p1) {
  const tmp = s[p0];
  s[p0] = s[p1];
  s[p1] = tmp;
};

var _reverseString2 = function (s, p0, p1) {
  if (p1 - p0 < 0) {
    return;
  }
  swap(s, p0, p1);
  _reverseString2(s, p0 + 1, p1 - 1);
};

var reverseString2 = function (s) {
  if (s) {
    _reverseString2(s, 0, s.length - 1);
  }
};

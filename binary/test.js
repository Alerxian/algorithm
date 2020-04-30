var longestPalindrome = function (s) {
  // O(n^2)
  let str = "",
    len = s.length;
  let result = "";
  for (let i = 1; i < len; ++i) {
    for (let j = i - 1; j >= 0; j--) {
      str = s.slice(j, i + 1);
      if (isPalindromic(str)) {
        result = result.length > str.length ? result : str;
        break;
      }
    }
  }
  return result;
};

var longestPalindrome1 = function (s) {
  // 暴力法 O(n^3) 空间复杂度：O(n^2)
  let str = "",
    len = s.length;
  let result = "";
  for (let i = 0; i < len; ++i) {
    for (let j = i + 1; j <= len; j++) {
      str = s.slice(i, j);
      if (isPalindromic(str) && str.length > result.length) {
        result = str;
      }
    }
  }
  return result;
};

var isPalindromic = function (str) {
  let len = str.length - 1;
  //   let mid = len >> 1;
  //   let i = 0;
  //   while (i <= mid) {
  //     if (str[i] !== str[len - i]) return false;
  //   }
  //   return true;
  let isOdd = len % 2 !== 0;
  let mid = isOdd ? (len - 1) / 2 : len / 2;
  let s1 = str.slice(0, mid);
  let s2 = str.slice(isOdd ? mid + 1 : mid, len);
  if (s1 === s2.split("").reverse().join("")) {
    return true;
  }
  return false;
};
// let s = "";
// let code = "abcdefghijklmnopqrstuvwxyz".split("");
// function random() {
//     return Math.floor(Math.random() * 26); // [0, 26)
// }
// for(let i = 0; i < 1000; i++) {
//     s += code[random()];
// }
console.time("start: ");
let str = longestPalindrome1(
  "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"
);
console.log(str);
console.timeEnd("start: ");

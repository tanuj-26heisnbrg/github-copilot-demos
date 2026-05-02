function longestCommonSubstring(str1, str2, str3) {
    if (!str1 || !str2 || !str3) return '';

    let longest = '';
    const len1 = str1.length;
    const len2 = str2.length;
    const len3 = str3.length;

    for (let i = 0; i < len1; i++) {
        for (let j = i + 1; j <= len1; j++) {
            const candidate = str1.slice(i, j);
            if (candidate.length <= longest.length) continue;
            if (str2.includes(candidate) && str3.includes(candidate)) {
                longest = candidate;
            }
        }
    }

    return longest;
}

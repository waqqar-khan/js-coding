function removeHashCharacters(input) {
    let stack = [];
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '#') {
            let hashCount = 0;
            while (i < input.length && input[i] === '#') {
                hashCount++;
                i++;
            }
            i--;
            
            while (hashCount > 0 && stack.length > 0) {
                stack.pop();
                hashCount--;
            }

            if (stack.length > 0) {
                result.push(stack.join(""));
                stack = [];
            }
        } else {
            stack.push(input[i]);
        }
    }

    if (stack.length > 0) {
        result.push(stack.join(""));
    }

    return result.join("");
}

console.log(removeHashCharacters("AB#C##"));  // Output: "A"
console.log(removeHashCharacters(""));  // Output: ""
console.log(removeHashCharacters("SV###DE#")); // Output: "D"
console.log(removeHashCharacters("D#BEH##NC#HRE###")); // Output: "BN"
console.log(removeHashCharacters("D#BE##C#EHR###"));  // Output: ""
console.log(removeHashCharacters("A1B2#C3D###2"));  // Output: "A1B2"
console.log(removeHashCharacters("123#4#5###"));  // Output: "12"
console.log(removeHashCharacters("A1#$@B2##C3D###2"));  // Output: "A$@2"
console.log(removeHashCharacters("ABCD##E#F##GHI#J###KLMOZ####")); // Output: "ABGHK"
console.log(removeHashCharacters("ABC###"));  // Output: ""
console.log(removeHashCharacters("###ABC"));  // Output: "ABC"

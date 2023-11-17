// A sentence is a list of words that are separated 
// by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, 
// where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

 

// Example 1:

// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

var mostWordsFound = function(sentences) {
    // Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
    // Output: 6

    // initialize a variable maxWordlength with 0; run a loop iterating over sentences;
    // split index with space and find length of sentences and store in a new variable;
    // comapare the new variable with maxWordLength; return maxWordlength

    let maxWordLength = 0;

    for(let i=0; i < sentences.length; i++){
        let newSentence = sentences[i].split(" ").length
        if(maxWordLength < newSentence){
            maxWordLength = newSentence
        }
    }

    return maxWordLength
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));

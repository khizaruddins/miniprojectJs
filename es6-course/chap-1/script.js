// includes method returns true 
// when a string searched is found 
// else returns false

// startswith method returns true 
// when string searched is found
// in start of the sentence or word or 
// else returns false

// endswith method returns true 
// when string searched is found 
// in end of a sentence or a word or 
// else returns false

// these three methods takes two parameter 
// 1. the text to search for
// 2. the optional index from where to start search

// the includes and startswith method starts search 
// from index provided 
// while endswith starts searching from 
// length of actual string - optional index provided 
// for search

// when second argument is not given
// includes and startswith begins with first character of string
// while endswith starts with end of string

// optimized approach to put second argument

var msg = "helllo world !";

console.log(`the message '${msg}' starts with 'hell': `+ msg.startsWith("hell"));
console.log(`the message '${msg}' starts with 'lo' at 4th position: `+ msg.startsWith("lo", 4));
console.log(`does the message '${msg}' includes ' ' ?: `+ msg.includes(" "));
console.log(`does the message '${msg}' includes 'ld' from 7th position till end of string ?: `+ msg.includes('ld', 7));
console.log(`the message '${msg}' ends with '!' ?: `+ msg.endsWith("!"));
console.log(`the message '${msg}' ends with ' ' at position 7 counted from backwards ?: `+ msg.endsWith(" ", 7));

// repeat method accepts the number of time a string 
// should repeat string that number of time
console.log(`the message '${msg}' is repeated 2 times: `+ msg.repeat(2));

  // Task 4

// In this task we'll be creating a new syntax very similar to pair in c++ using babel-plugin.
// Pair (for reference) - https://www.cplusplus.com/reference/utility/pair/

const babel = require('@babel/core');

const code = `
  const train = pair('delhi','mumbai');
`

const output  = babel.transformSync(code,{
  plugins:[
    // Write plugin function here
    
  ]
})

console.log(output.code)
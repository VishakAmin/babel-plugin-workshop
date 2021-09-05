// Task 2
// In this task we'll change the 'n' to any other variable using path properties.
const babel = require('@babel/core');

const code =  `
  function square(n){
    return n * n;
  }
`

function changeParaName(){
  return {
    visitor:{
      FunctionDeclaration(path, state){
        path.scope.rename("n", "a")
      }
    }
  }
}

const output  = babel.transformSync(code,{
  plugins:[
    // Write plugin function here
    changeParaName()
  ]
})

console.log(output.code);


const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result){
    let verilen = result.input
    let kvadrat = ''
    for(let i = 1; i <= verilen; i++){
        for(let j = 1; j <= verilen; j++){
            kvadrat += '*'
        }
        kvadrat += '\n'
    }
    console.log(kvadrat);
})

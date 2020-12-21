const fs=require('fs');
// fs.readFile('./public/data.json', 'utf8', (err, data)=> {
//   if (err) throw err;
//   else
//     {console.log(data);}
// });

function fun(path)
{
  return new Promise((resolve,reject)=>
  {
    fs.read(path,'utf8', (err,data)=>
    {
      if(err) reject(err)
      else resolve(data);
    })
  })
}
fun('./public/data.json')
.then(res=>
  {
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
// function readFile() {}


// readFile(path).then(data => {

// })
function readFile()
{
  return new Promise((resolve, reject)=>
  {
        fs.readFile('./public/data.json','utf8',resolve);
  });
}

readFile()
.then(read=>
    {
        console.log(read)
    })

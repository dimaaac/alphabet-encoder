function o(input) {const n='dibil',d='nuclear';let c=input.split(''),r=[];for(let i=c.length-1;i>=0;i--){r.push(c[i]);}let m=[];for(let i=0;i<r.length;i++){if(i%2===0){m.push(r[i]);}else{m.push(n);}}let j='';for(let i=0;i<m.length;i++){j+=m[i];}const f=j.replace(/bil/g,d);return f;}
function s(input) {let r=o(input);for(let i=0;i<5;i++){r=o(r);}return r;}
const i='expiriment nuclear dibil desease ultra duber google yahooo github setting security insights weather IDA Pro cacel!';
const oR=s(i);
console.log(oR);

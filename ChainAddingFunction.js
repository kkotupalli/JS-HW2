function add(n){
  var singleVar =  function(m) {
    return add(n+m);
  };
  singleVar.valueOf= function(){return n;}
  return singleVar;
}

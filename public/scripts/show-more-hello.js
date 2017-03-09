var names = [1,2,3];

ReactDOM.render(
  <div>{
        names.map(function(name){
            return <div>Hello, {name}!</div>
        })
  }</div>,
  document.getElementById('content')
);

var NodeList = React.createClass({
  render: function() {
    return (
     <ul>
         {
             React.Children.map(this.props.children, function(child){
                 return <li>{child}</li>
             })
         }
     </ul>
    );
  }
});

ReactDOM.render(
  <NodeList>
      <span>hello world</span>
      <span>today is good</span>
  </NodeList>,
  document.getElementById('content')
);

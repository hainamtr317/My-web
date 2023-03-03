import React, { useState, useEffect } from 'react';
class Square extends React.Component {
    render() {
        return (
            <button className="square">{this.props.name}</button>
        )
    }
}

 const Example = ()=>{
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example
import React, { useState, useEffect } from "react";

const Wrapper = (WrapperComponent) => {
  return function EnhancedComponent(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((res) => setPosts(res));
    }, []);
    return <WrapperComponent {...props} data={posts} />;
  };
};

export default Wrapper;

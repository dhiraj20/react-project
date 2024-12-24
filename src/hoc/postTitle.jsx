import React from 'react';
import Wrapper from './wrapper';

const PostTitle = (props) => {
    const {data} = props;
  return (
    <div>
        <div>Title Component</div>
      {data.map(value => <ul key={value.id}><li>{value.title}</li></ul>)}
    </div>
  );
};

export default Wrapper(PostTitle);
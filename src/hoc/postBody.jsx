import React from 'react';
import Wrapper from './wrapper';

const PostBody = (props) => {
    const {data} = props;
  return (
    <div>
        <div>Body component</div>
       {data.map(value => <ul key={value.id}><li>{value.body}</li></ul>)}
    </div>
  );
};

export default Wrapper(PostBody);
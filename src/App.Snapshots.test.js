import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it("sets submit button label ",()=>{
 const tree = renderer.create(<App/>);
 expect(tree).toMatchSnapshot(); 
});



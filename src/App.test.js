import React from 'react';
import {render } from "@testing-library/react";
import App from './app';

describe('App Component', ()=>{ 

    it('should render without error', ()=>{

        const { asFragment } = render(<App/>);
        expect(asFragment()).toMatchSnapshot(); 

    });

});

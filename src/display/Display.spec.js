import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

test('check gate defaults to unlocked and open', () =>{
    const  {getByText} = render(<Display />);

    expect(getByText(/unlocked/i));
    expect(getByText(/open/i));
});

test('displays closed if the closed prop is true', () =>{
    const {getByText} = render(<Display  closed={true}/>);

    expect(getByText(/closed/i));
});

test('displays locked if the locked prop is true', () =>{
    const {getByText} = render(<Display  locked={true}/>);

    expect(getByText(/locked/i));
});

test('when closed  use red-led class', () =>{
    const {getByText} = render(<Display closed={true} />);
    const closed = getByText(/closed/i);
    expect(closed).toHaveClass('red-led');
});

test('when locked use red-led class', () =>{
    const {getByText} = render(<Display locked={true} />);
    const locked = getByText(/locked/i);
    expect(locked).toHaveClass('red-led');
});

test('when open use green-led class', () =>{
    const {getByText} = render(<Display closed={false} />);
    const open = getByText(/open/i);
    expect(open).toHaveClass('green-led');
});

test('when unlocked use green-led class', () =>{
    const {getByText} = render(<Display locked={false} />);
    const unlocked = getByText(/unlocked/i);
    expect(unlocked).toHaveClass('green-led');
});
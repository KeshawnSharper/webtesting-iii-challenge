import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Dashboard from './Dashboard';



test('cannot be closed or opened if it is locked', () => {
    const {getByText} = render(<Dashboard />);
    fireEvent.click(getByText(/close gate/i));
    fireEvent.click(getByText(/lock gate/i));
    fireEvent.click(getByText(/open gate/i));
    expect(getByText(/closed/i));

});

test('control and display are in the dashboard', () => {
    const {getByTestId} = render(<Dashboard />);
    expect(getByTestId('display'));
    expect(getByTestId('controls'));

});

test('displays if gate is open/closed and locked/unlocked', () => {
    const {getByText} = render(<Dashboard />);
    expect(getByText(/unlocked/i));
    expect(getByText(/open/i));
    fireEvent.click(getByText(/close gate/i));
    fireEvent.click(getByText(/lock gate/i));
    expect(getByText(/locked/i));
    expect(getByText(/closed/i));

});
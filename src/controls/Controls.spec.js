import React from 'react';
import {render, getByTestId,  fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';

test('buttons to toggle are provided ', () =>{
    const {getByText} = render(<Controls />);

    expect(/close gate/i);
    expect(/lock gate/i);
});

test('lock toggle button is disabled if the gate is open', () =>{
    const closedButtonMock = jest.fn();

    const {getByText} = render(<Controls toggleClosed={closedButtonMock} closed={false} locked={false} />);
    expect(getByText(/lock gate/i)).toBeDisabled();
});

test('closed toggle button is disabled if the gate is locked', () =>{
    const closedButtonMock = jest.fn();

    const {getByText} = render(<Controls toggleClosed={closedButtonMock} closed={true} locked={true} />);
    expect(getByText(/open gate/i)).toBeDisabled();
});
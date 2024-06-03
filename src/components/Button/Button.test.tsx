import { describe, expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button/>', () => {
  test('Should render When passed minimum proos', () => {
    const text = 'Content test';
    render(<Button>{text}</Button>);
    const content = screen.getByText(text);
    expect(content).toBeInTheDocument();
  });
});

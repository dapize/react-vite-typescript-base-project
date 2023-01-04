import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button/>', () => {
  test('Should Render', () => {
    render(<Button>Any Text</Button>);
    expect(screen.getByText(/Any Text/i)).toBeDefined();
  });

  test('OnClick event', () => {
    const click = vi.fn();
    render(<Button onClick={click}>Any Text</Button>);
    fireEvent.click(screen.getByText(/Any Text/i));
    expect(click).toBeCalled();
  });
});

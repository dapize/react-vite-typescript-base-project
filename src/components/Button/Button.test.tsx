import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('<Button/>', () => {
  test('Should Render', () => {
    render(<Button>Any Text</Button>);
    expect(screen.queryByText(/Any Text/i)).toBeInTheDocument();
  });

  test('OnClick event', async () => {
    const click = vi.fn();
    render(<Button onClick={click}>Any Text</Button>);
    const anyButton = screen.queryByText(/Any Text/i);
    await userEvent.click(anyButton as HTMLElement);
    expect(click).toBeCalled();
  });
});

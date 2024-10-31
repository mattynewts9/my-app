import { render, screen } from '@testing-library/react'
import { FirstTest } from '../first_test';

test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    screen.getByText(/First test/i);

    // expect(element).toBeInTheDocument();
})


test("Example 2 renders successfully", () => {
  render(<FirstTest/>);

  screen.getByText(/hello/i);

  // expect(element).toBeInTheDocument();
})

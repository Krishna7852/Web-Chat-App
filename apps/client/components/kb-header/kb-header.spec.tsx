import { render } from '@testing-library/react';

import KbHeader from './kb-header';

describe('KbHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KbHeader />);
    expect(baseElement).toBeTruthy();
  });
});

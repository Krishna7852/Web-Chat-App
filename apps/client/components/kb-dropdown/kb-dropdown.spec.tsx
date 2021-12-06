import { render } from '@testing-library/react';

import KbDropdown from './kb-dropdown';

describe('KbDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KbDropdown />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import KbButton from './kb-button';

describe('KbButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KbButton />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  describe('rating was passed', () => {
    it('show the average', () => {
      const {getByText} = render(<StarRating rating={{average: 7}} />);
      const element = getByText('7');

      expect(element).toBeTruthy();
    });

    it('show the start icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);
      const icon = getByTestId('starIcon');

      expect(icon).toBeTruthy();
    });
  });

  describe('rating was NOT passing', () => {
    it('return nothing', () => {
      const {container} = render(<StarRating />);

      expect(container.children).toEqual([]);
    });
  });
});

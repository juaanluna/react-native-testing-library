import React, {createRef} from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';

const modalizeRef = createRef<Modalize>();
describe('', () => {
  test('show all season option', () => {
    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={() => console.log('oi')}
      />,
    );
    act(() => {
      // devemos encapsular no ACT sempre que algo for fazer uma mudança de estado / algum estado sofrer um efeito colateral
      modalizeRef.current?.open();
    });

    expect(getAllByText('Season', {exact: false}).length).toEqual(3);
  });

  test('call onSelectSeason with correct season when season was pressed', () => {
    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={onSelectSeasonMock}
      />,
    );
    act(() => {
      // devemos encapsular no ACT sempre que algo for fazer uma mudança de estado / algum estado sofrer um efeito colateral
      modalizeRef.current?.open();
    });

    const season2Element = getByText('season 2', {exact: false});
    fireEvent.press(season2Element); // fireEvent testa eventos, como um toque em um botão

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});

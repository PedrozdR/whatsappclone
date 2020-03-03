import styled from 'styled-components/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from 'utils/colors';
import { FlatList } from 'react-native';

export const Status = {
  List: styled(FlatList as new () => FlatList<string>).attrs(() => ({
    flexGrow: 1,
    padding: 16,
    paddingBottom: 16,
  }))`
    flex: 1;
    /* background-color: ${colors.background}; */
  `,
};

export const Field = {
  Container: styled.View`
    width: 100%;
    border-radius: 12px;
    padding: 8px;
    flex-direction: row;
    margin: 8px 0px;
    background: #f4f4f4;
    align-items: center;
  `,
  Icon: styled(FontAwesome5Icon).attrs(() => ({
    color: colors.light,
    size: 18,
  }))`
    margin: 0px 4px;
  `,
  Input: styled.TextInput.attrs(() => ({
    placeholderTextColor: colors.light,
  }))`
    width: 100%;
    padding: 0px 4px;
    font-size: 18px;
    color: ${colors.text};
  `,
};

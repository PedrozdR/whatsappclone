import styled from 'styled-components/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from 'utils/colors';
import { FlatList } from 'react-native';

export const Status = {
  List: styled(FlatList as new () => FlatList<string>).attrs(() => ({
    flexGrow: 1,
    paddingBottom: 16,
  }))`
    flex: 1;
    /* background-color: ${colors.background}; */
  `,
  Header: styled.View`
    padding: 14px;
  `,
  Container: styled.View`
    width: 100%;
    background: #fff;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: ${colors.light};
    padding: 8px 14px;
    flex-direction: row;
    align-items: center;
  `,
  Avatar: styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 12px;
  `,
  Content: styled.View`
    flex-direction: column;
  `,
  Title: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.text};
  `,
  Subtitle: styled.Text`
    font-size: 14px;
    color: ${colors.lightText};
  `,
  Actions: styled.View`
    flex-direction: row;
  `,
  Action: styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.8,
  }))`
    background: ${colors.light};
    padding: 8px 10px;
    border-radius: 20px;
  `,
  Icons: styled(FontAwesome5Icon).attrs(() => ({
    color: colors.secondary,
    size: 18,
  }))``,
};

export const Field = {
  Container: styled.View`
    width: 100%;
    border-radius: 12px;
    padding: 8px;
    flex-direction: row;
    margin: 8px 0px;
    background: #fff;
    align-items: center;
    margin-bottom: 32px;
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

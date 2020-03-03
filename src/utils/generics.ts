import styled from 'styled-components/native';
import { colors } from './colors';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    padding: 16,
    flexGrow: 1,
  },
}))`
  flex: 1;
  background: ${colors.background};
`;

export const Topic = styled.Text`
  font-size: 32px;
  color: ${colors.text};
`;

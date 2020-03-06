import React from 'react';
import { Container, Topic } from 'utils/generics';
import { Field, Status } from './styles';
import { Text, View } from 'react-native';

export default function() {
  function renderHeader() {
    return (
      <>
        <Status.Header>
          <Topic children="Status" />
          <Field.Container>
            <Field.Icon name="search" />
            <Field.Input placeholder="Buscar" />
          </Field.Container>
        </Status.Header>
        <Status.Container>
          <Status.Avatar source={{ uri: 'https://picsum.photos/1920/1080' }} />
          <Status.Content>
            <Status.Title children="Meus Status" />
            <Status.Subtitle children="Adicionar ao meu status" />
          </Status.Content>
          <View style={{ flex: 1 }} />
          <Status.Actions>
            <Status.Action style={{ marginRight: 12 }}>
              <Status.Icons name="camera" />
            </Status.Action>
            <Status.Action>
              <Status.Icons name="pen" />
            </Status.Action>
          </Status.Actions>
        </Status.Container>
      </>
    );
  }

  return (
    <Status.List
      data={['', '', '']}
      ListHeaderComponent={renderHeader}
      renderItem={() => <Text children="Troll" />}
    />
  );
}

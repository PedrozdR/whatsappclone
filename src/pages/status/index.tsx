import React, { useState } from 'react';
import { Container, Topic } from 'utils/generics';
import { Field, Status } from './styles';
import { Text, View } from 'react-native';

export default function() {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

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
        <Status.Container style={{ marginBottom: 32 }}>
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
        <Status.Text children="ATUALIZAÇÕES RECENTES" />
        {data.map(e => (
          <Status.Container>
            <Status.Avatar
              source={{
                uri: `https://picsum.photos/1920/1080/?random=${e.id} `,
              }}
            />
            <Status.Content>
              <Status.Title children="Lorem Amet" />
              <Status.Subtitle children="há 4 min" />
            </Status.Content>
          </Status.Container>
        ))}
      </>
    );
  }

  return (
    <Status.List
      data={['', '', '']}
      ListHeaderComponent={renderHeader}
      renderItem={({ item, index }) => <Text key={index} children="" />}
    />
  );
}

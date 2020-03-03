import React from 'react';
import { Container, Topic } from 'utils/generics';
import { Field, Status } from './styles';
import { Text } from 'react-native';

export default function() {
  function renderHeader() {
    return (
      <>
        <Topic children="Status" />
        <Field.Container>
          <Field.Icon name="search" />
          <Field.Input placeholder="Buscar" />
        </Field.Container>
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

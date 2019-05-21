import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { List, Datagrid, TextField, EditButton, ChipField } from 'react-admin';

class PostList extends React.Component {
  render() {
    return (
      <List {...this.props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <ChipField label="Status" source="" />
          <EditButton />
        </Datagrid>
      </List>
    )
  }
}

export default connect(undefined, { push })(PostList);

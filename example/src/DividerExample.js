/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { ListView, StyleSheet } from 'react-native';
import { Divider, Subheading, withTheme } from 'react-native-paper';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const dataSource = ds.cloneWithRows([
  'Apple',
  'Banana',
  'Coconut',
  'Lemon',
  'Mango',
  'Peach',
]);

const DividerExample = props => {
  const { theme: { colors: { background } } } = props;
  return (
    <ListView
      style={[styles.container, { backgroundColor: background }]}
      dataSource={dataSource}
      renderRow={rowData => (
        <Subheading style={styles.item}>{rowData}</Subheading>
      )}
      renderSeparator={(sectionId, rowId) => <Divider key={rowId} />}
    />
  );
};

DividerExample.title = 'Divider';
DividerExample.propTypes = {
  theme: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default withTheme(DividerExample);

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

const { ContextMenu, SlideInMenu } = renderers;

export default class BasicExample extends Component {

  constructor(props, ctx) {
    super(props, ctx);
    this.state = { renderer: ContextMenu };
  }

  render() {
    return (
      <MenuContext style={styles.container}>
        <Menu renderer={this.state.renderer}>
          <MenuTrigger text='Select option' styles={triggerStyles} />
          <MenuOptions styles={optionsStyles}>
            <MenuOption text='Context Menu'
              onSelect={() => this.setState({renderer: ContextMenu})}/>
            <MenuOption text='Slide-in Menu'
              onSelect={() => this.setState({renderer: SlideInMenu})}/>
            <MenuOption text='Three (custom)' styles={optionStyles}
              onSelect={() => alert('Selected custom styled option')} />
            <MenuOption disabled={true}>
              <Text style={{color: '#ccc'}}>Four (disabled)</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </MenuContext>
    );
  }

}

const triggerStyles = {
  triggerText: {
    color: 'white',
  },
  triggerWrapper: {
    backgroundColor: 'blue',
    padding: 5,
  },
  triggerTouchable: {
  },
};

const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'green',
    padding: 5,
  },
  optionsWrapper: {
    backgroundColor: 'purple',
  },
  optionTouchable: {
  },
  optionWrapper: {
    backgroundColor: 'yellow',
    margin: 5,
  },
  optionText: {
    color: 'brown',
  },
};

const optionStyles = {
  optionTouchable: {
  },
  optionWrapper: {
    backgroundColor: 'pink',
    margin: 5,
  },
  optionText: {
    color: 'black',
  },
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 30,
  },
});

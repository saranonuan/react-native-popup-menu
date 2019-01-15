import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { debug } from './logger.js';
import { makeTouchable } from './helpers';
import { withCtx } from './MenuProvider';

export class MenuTrigger extends Component {

  _openMenu() {
    debug('trigger onPress');
    this.props.ctx.menuActions.openMenu(this.props.menuName);
  }

  render() {
    const { disabled, onRef, text, children, style, customStyles, menuName, triggerOnLongPress, ...other } = this.props;
    const openMenu = () => !disabled && this._openMenu();
    const { Touchable, defaultTouchableProps } = makeTouchable(customStyles.TriggerTouchableComponent);
    return (
      <View ref={onRef} collapsable={false} style={customStyles.triggerOuterWrapper}>
        <Touchable
          onPress={triggerOnLongPress ? this.props.onPress : openMenu}
          onLongPress={triggerOnLongPress ? openMenu : this.props.onLongPress}
          {...defaultTouchableProps}
          {...customStyles.triggerTouchable}
        >
          <View {...other} style={[customStyles.triggerWrapper, style]}>
            {text ? <Text style={customStyles.triggerText}>{text}</Text> : children}
          </View>
        </Touchable>
      </View>
    );
  }

}

MenuTrigger.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
  customStyles: PropTypes.object,
  triggerOnLongPress: PropTypes.bool,
};

MenuTrigger.defaultProps = {
  disabled: false,
  customStyles: {},
};

export default withCtx(MenuTrigger)

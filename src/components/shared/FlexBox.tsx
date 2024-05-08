import React from 'react';
import { View } from 'react-native';
import { IFlexBoxProps } from '../../models';
import { horizontalScale, verticalScale } from '../../utils';

function FlexBox(props: IFlexBoxProps) {
  const {
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    gap,
    rowGap,
    columnGap,
    style,
    children,
  } = props;

  return (
    <View
      style={[
        {
          flexDirection: flexDirection || 'row',
          alignItems: alignItems || 'flex-start',
          justifyContent: justifyContent || 'flex-start',
          flexWrap: flexWrap || 'nowrap',
          gap: gap ? gap : undefined,
          rowGap: rowGap ? verticalScale(rowGap) : undefined,
          columnGap: columnGap ? horizontalScale(columnGap) : undefined,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export default FlexBox;

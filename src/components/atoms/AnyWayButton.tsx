import React, { FC } from 'react';
import { Button, ButtonProps } from '@material-ui/core';

interface IProps extends ButtonProps {
  onClick: ( arg0: any ) => any;
  // onClick : Function;
}

export const AnyWayButton: FC<IProps> = ({ ...props }) => <Button {...props} />;

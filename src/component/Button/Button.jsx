import React from 'react';
import {Button} from './Style';

export default (props) => {
	return <Button {...props}>{props.children}</Button>;
};

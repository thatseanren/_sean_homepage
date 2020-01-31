import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ren from '../ren.jpg';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
    root: {
        height: '100px',
        width: '100px',
        top: '25px',
    },
}));

export default function Avatar_ren() {
    const classes = useStyles();

    return (<Avatar alt='sean ren' src={ren} className={clsx(classes.root, 'centered')}>
        </Avatar>
    );
}
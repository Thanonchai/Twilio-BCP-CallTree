import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import CardIcon from './CardIcon';

interface Props {
    serverStats?: {
        totalContacts: number
    };
}

const useStyles = makeStyles({
    main: {
        flex: '1',
        marginTop: 20,
        minWidth: '30%',
        marginRight: '1rem',
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 140,
    },
    title: {
        fontWeight: 'bold',
    },
    paragraph: {
        textAlign: 'right',
        fontSize: 'x-large',
    }
});

const ContactsCard: FC<Props> = ({ serverStats }) => {
    const classes = useStyles();
    return (
        <div className={classes.main} >
            <CardIcon Icon={PeopleAltIcon} bgColor="#9003fc" />
            <Card className={classes.card}>
                <Typography className={classes.title} color="textSecondary">
                    {"Total Contacts"}
                </Typography>
                <br/>
                <br/>
                <br/>
                <Typography className={classes.paragraph} component="h2">
                    {serverStats?.totalContacts}
                </Typography>
            </Card>
        </div>
    );
};

export default ContactsCard;

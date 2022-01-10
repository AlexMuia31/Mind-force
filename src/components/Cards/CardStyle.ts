
import red from '@material-ui/core/colors/red';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const cardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,

        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        gridContainer: {
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingTop: '20px'
        },
        avatar: {
            backgroundColor: red[500],
        },

    }),
);
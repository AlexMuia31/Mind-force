import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


export const LoaderStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(4),
            },

        },
    }),
)
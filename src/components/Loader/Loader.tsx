import CircularProgress from '@material-ui/core/CircularProgress';
import { LoaderStyles } from './LoaderStyles';

//loader for isFetching

export const Loader = () => {
    const classes = LoaderStyles()
    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

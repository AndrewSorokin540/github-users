import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import api from 'api'

export const UsersPage: React.FC = () => {
    const { data: users, isFetching, isError } = useQuery('users', () => {
        return api.getUsers()
    })

    if (isError) {
        return (
            <Alert severity="error">
                <AlertTitle>Ошибка</AlertTitle>
            </Alert>
        )
    }

    if (isFetching) {
        return (
            <CircularProgress />
        )
    }

    return (
        <List>
            {users?.map(user => (
                <Link to={String(user.id)}>
                    <ListItem disablePadding key={user.id}>
                        <ListItemButton>
                            <ListItemText primary={user.login} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import api from 'api'

export const UsersPage: React.FC = () => {
    const { data: users } = useQuery('users', () => {
        return api.getUsers()
    })
    return (
        <Box display='flex' justifyContent='center'>
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
        </Box>
    )
}
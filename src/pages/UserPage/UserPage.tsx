import { useParams, useNavigate } from "react-router"
import { useQuery } from "react-query"
import api from 'api'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export const UserPage: React.FC = () => {
    const navigate = useNavigate()
    const { userId } = useParams()
    const { data: user, isFetching, isError } = useQuery(['user', userId], () => {
        return api.getUser(userId!)
    }, {
        enabled: Boolean(userId)
    })

    const goBack = () => {
        navigate('/')
    }

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100vh'
            flexDirection='column'
        >
            {isFetching ? <CircularProgress /> : isError ? 'Ошибка' : (
                <Card sx={{ display: 'flex', marginBottom: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {user?.name || 'Нет имени'}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {user?.email || 'Нет email'}
                            </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 150, height: 150 }}
                        image={user?.avatar_url}
                        alt={user?.name}
                    />
                </Card>
            )}
            <Button onClick={goBack}>Назад</Button>
        </Box>
    )
}
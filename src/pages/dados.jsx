import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Box,
  Divider,
} from '@mui/material';

function Dados() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      })
      .then(res => res.json())
      .then(userData => {
        setUser(userData);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress color="primary" />
        <Typography variant="h6" sx={{ ml: 2 }}>Carregando dados...</Typography>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5" color="error" align="center">
          Post não encontrado.
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 5
      }}
    >
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            Detalhes do Post
          </Typography>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {post.body}
          </Typography>
          <Divider sx={{ my: 2 }} />
          {user && (
            <Box>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Usuário
              </Typography>
              <Typography variant="body2"><strong>Nome:</strong> {user.name}</Typography>
              <Typography variant="body2"><strong>Email:</strong> {user.email}</Typography>
              <Typography variant="body2"><strong>Website:</strong> {user.website}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Dados;

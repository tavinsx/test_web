export async function getPosts() {
    const responde = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!responde.ok) throw new Error('Erro ao buscar os posts');
    return responde.json();
        }
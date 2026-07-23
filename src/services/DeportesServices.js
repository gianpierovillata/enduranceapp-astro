import deportes from '../models/deporte'
export async function getDeportes() {
    /* const response = await fetch('http://localhost:3000/deportes');
  
   if (!response.ok) {
      throw new Error('Error al obtener los deportes');
    }

    const data = await response.json();
    return data; */

    return deportes;
}






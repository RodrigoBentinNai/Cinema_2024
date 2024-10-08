const movieService = require('../services/movieService');

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await movieService.getAllMovies();
      res.status(200).json(movies); // Devuelve las instancias de la clase Movie como JSON
    } catch (error) {
      res.status(500).json({ message: error.message }); // En caso de error
    }
  },
};

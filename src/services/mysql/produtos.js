const produtos = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('SELECT * FROM produto', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar produtos', reject)
            return false
          }
          resolve({produtos: results})
        })
      })
    }
  }
}

module.exports = produtos

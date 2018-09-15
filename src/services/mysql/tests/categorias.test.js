
import test from 'ava'
const { connection, errorHandler } = require('./setup')
const categorias = require('../categorias')({ connection, errorHandler })

const create = () => categorias.save('categoria-test')

test.beforeEach(t => connection.query('TRUNCATE TABLE categoria'))
test.after.always(t => connection.query('TRUNCATE TABLE categoria'))

test('Lista de categorias', async t => {
  await create()
  const list = await categorias.all()
  t.is(list.categorias.length, 1)
  t.is(list.categorias[0].name, 'categoria-test')
})

test('Criação de categoria', async t => {
  const result = await create()
  t.is(result.categoria.name, 'categoria-test')
})

test('Atualização de categoria', async t => {
  await create()
  const updated = await categorias.update(1, 'categoria-test-updated')
  t.is(updated.categoria.name, 'categoria-test-updated')
  t.is(updated.affectedRows, 1)
})

test('Remoção de categoria', async t => {
  await create()
  const removed = await categorias.del(1)
  t.is(removed.affectedRows, 1)
})

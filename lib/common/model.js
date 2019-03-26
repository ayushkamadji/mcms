const Model = (tableName, createModel) => (db) => {
  const model = () => db(tableName)
  createModel = createModel || ( model => model )

  const findOne = (filter) => {
    return model().where({...filter}).first()
      .then( data => createModel(data))
  }

  const findAll = (filter) => {
    return model().where({...filter}).select()
      .then( array => array.map(createModel) )
  }

  const findById = (id, { fieldName } = { fieldName: "id" }) => {
    return model().where({[fieldName]: id}).first()
      .then( data => createModel(data) )
  }

  const destroyById = (id, {fieldName = "id"}) => {
    return model().where({[fieldName]: id}).del()
  }

  const create = (data) => {
    return model().returning("*").insert({...data})
      .get(0)
      .then( data => createModel(data))
  }

  const updateById = (id, data, {idFieldName = "id"}) => {
    return model().where({[idFieldName]: id})
      .update({...data})
      .get(0)
      .then( data => createModel(data))
  }

  return {
    findOne,
    findAll,
    findById,
    destroyById,
    create,
    updateById
  }
}

module.exports = Model

/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number3219281744",
    "max": 10,
    "min": 1,
    "name": "seats",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // remove field
  collection.fields.removeById("number3219281744")

  return app.save(collection)
})

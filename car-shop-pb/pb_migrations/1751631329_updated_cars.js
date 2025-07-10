/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // update collection data
  unmarshal({
    "listRule": null
  }, collection)

  // remove field
  collection.fields.removeById("text2139560351")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2139560351",
    "maxSelect": 1,
    "name": "transmission",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Manuale",
      "Automatico",
      "Altro"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // update collection data
  unmarshal({
    "listRule": ""
  }, collection)

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2139560351",
    "max": 0,
    "min": 0,
    "name": "transmission",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2139560351")

  return app.save(collection)
})

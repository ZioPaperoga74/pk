/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // remove field
  collection.fields.removeById("text2627800888")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select2627800888",
    "maxSelect": 1,
    "name": "fuel_type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Elettrico",
      "Benzina",
      "Diesel",
      "GPL",
      "Metano",
      "Ibrida",
      "Altro"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2627800888",
    "max": 0,
    "min": 0,
    "name": "fuel_type",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2627800888")

  return app.save(collection)
})

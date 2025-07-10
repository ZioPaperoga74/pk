/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": true,
    "id": "bool2086131741",
    "name": "approved",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select2627800888",
    "maxSelect": 1,
    "name": "fuel_type",
    "presentable": false,
    "required": true,
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

  // remove field
  collection.fields.removeById("bool2086131741")

  // update field
  collection.fields.addAt(6, new Field({
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
})

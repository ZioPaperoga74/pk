/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number1455290388",
    "max": 1000000,
    "min": 0,
    "name": "mileage",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number1455290388",
    "max": null,
    "min": null,
    "name": "mileage",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})

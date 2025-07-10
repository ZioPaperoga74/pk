/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3402113753",
    "max": 500000,
    "min": 1,
    "name": "price",
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
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3402113753",
    "max": null,
    "min": 1,
    "name": "price",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})

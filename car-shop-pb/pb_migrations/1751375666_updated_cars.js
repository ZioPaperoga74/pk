/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_brand_model` ON `cars` (\n  `brand`,\n  `model`\n)",
      "CREATE INDEX `idx_price` ON `cars` (`price`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text238318876",
    "max": 0,
    "min": 0,
    "name": "desctiption",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "file3760176746",
    "maxSelect": 10,
    "maxSize": 5242880,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2999614116")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  // remove field
  collection.fields.removeById("text238318876")

  // remove field
  collection.fields.removeById("file3760176746")

  return app.save(collection)
})

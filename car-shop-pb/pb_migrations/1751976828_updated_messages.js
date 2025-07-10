/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `message_car` ON `messages` (\n  `message`,\n  `productID`,\n  `sender`,\n  `receiver`\n)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1035504790",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "receiver",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1608019204",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "sender",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `message_car` ON `messages` (\n  `userID`,\n  `message`,\n  `productID`\n)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation1035504790")

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1608019204",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "userID",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})

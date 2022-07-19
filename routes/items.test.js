const request = require("supertest");

const itemData = require('../dataInterface/items');
const server = require("../server");

describe("/items", () => {
  let items;
  beforeEach(() => {
    items = [{ id: 'test1', field: 'val' }, { id: 'test2', field: 'val2' }];
    itemData.items = [...items];
  });

  describe("GET /", () => {
    it("should return all items", async () => {
      const res = await request(server).get("/items");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(items);
    });
  });

  describe("GET /:id", () => {
    it("should return item by id", async () => {
      const res = await request(server).get("/items/test2");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(items[1]);
    });
    it("should return 404 if item does not exist", async () => {
      const res = await request(server).get("/items/other");
      expect(res.statusCode).toEqual(404);
    });
  });

  describe("POST /", () => {
    it("should create a new item", async () => {
      const item = { field: 'different', newKey: 'other val' };
      const res = await request(server).post("/items").send(item);
      expect(res.statusCode).toEqual(200);
      expect(itemData.items.length).toEqual(3);
      expect(itemData.items[2]).toMatchObject(item);
      expect(typeof itemData.items[2].id).toEqual('string');
      expect(itemData.items[2].id).toHaveLength(36);
    });
  });

  describe("PUT /", () => {
    it("should update an item but not change its id", async () => {
      const item = { field: 'updated', id: 'new' };
      const res = await request(server).put("/items/test1").send(item);
      expect(res.statusCode).toEqual(200);
      expect(itemData.items.length).toEqual(2);
      expect(itemData.items[0]).toEqual({ id: 'test1', field: 'updated' });
    });

    it("should update a different item but not change its id", async () => {
      const item = { field: 'Updated', id: 'new2' };
      const res = await request(server).put("/items/test2").send(item);
      expect(res.statusCode).toEqual(200);
      expect(itemData.items.length).toEqual(2);
      expect(itemData.items[1]).toEqual({ id: 'test2', field: 'Updated' });
    });

    it("should do nothing if id does not exist", async () => {
      const item = { field: 'Updated', id: 'new' };
      const res = await request(server).put("/items/new").send(item);
      expect(res.statusCode).toEqual(200);
      expect(itemData.items.length).toEqual(2);
      expect(itemData.items).toEqual(items);
    });
  });

  describe("DELETE /:id", () => {
    it("should delete an item", async () => {
      const res = await request(server).delete("/items/test1");
      expect(res.statusCode).toEqual(200);
      expect(itemData.items.length).toEqual(1);
      expect(itemData.items).toEqual([items[1]]);
    });
    it("should delete a different item", async () => {
      const res = await request(server).delete("/items/test2");
      expect(res.statusCode).toEqual(200);
      expect(itemData.items.length).toEqual(1);
      expect(itemData.items).toEqual([items[0]]);
    });
  });


});

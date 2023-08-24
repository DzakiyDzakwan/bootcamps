/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import BukusController from "App/Controllers/Http/BukusController";

Route.get("/", async () => {
  return { hello: "world" };
});

// Route.post("kategori", "KategorisController.save");
// Route.post("/buku", "BukusController.save");

Route.group(() => {
  // Route.get("/buku", "BukusController.index");
  // Route.get("/buku/:id", "BukusController.show");
  // Route.post("/buku", "BukusController.save");
  // Route.put("/buku/:id", "BukusController.update");
  // Route.delete("/buku/:id", "BukusController.destroy");

  // Route.get("/kategori", "KategorisController.index");
  // Route.get("/kategori/:id", "KategorisController.show");
  // Route.post("/kategori", "KategorisController.store");
  // Route.put("/kategori/:id", "KategorisController.update");
  // Route.delete("/kategori/:id", "KategorisController.destroy");

  Route.resource("/kategori", "KategorisController");
  Route.resource("/buku", "BukusController");
  Route.resource("/user", "UsersController");
  Route.post("/profile", "UsersController.addProfile").middleware("auth");
})
  .prefix("/api/v1")
  .namespace("App/Controllers/Http");

Route.group(() => {
  Route.post("/register", "AuthController.register");
  Route.post("/login", "AuthController.login");
  Route.post("/logout", "AuthController.logout").middleware("auth");
  Route.post("/me", "AuthController.me");
}).prefix("api/v1/auth");

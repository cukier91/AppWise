import { rest } from "msw";

const exampleProduct = {
  id: 1,
  name: "Example",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  price: 1999,
  image_url:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

const products = [exampleProduct];

export const handlers = [
  rest.get("/api/products/:id", (req, res, ctx) => {
    try {
      const { id } = req.params;

      const product = products.find((product) => product.id === Number(id));

      if (!product) {
        return res(
          ctx.delay(1_000),
          ctx.status(404),
          ctx.json({
            error: "Product not found",
          })
        );
      }

      return res(
        ctx.delay(1_000),
        ctx.status(200),
        ctx.json({
          product,
        })
      );
    } catch (error) {
      return res(
        ctx.delay(1_000),
        ctx.status(500),
        ctx.json({
          error: error?.toString(),
        })
      );
    }
  }),
  rest.get("/api/products", (req, res, ctx) => {
    try {
      return res(
        ctx.delay(1_000),
        ctx.status(200),
        ctx.json({
          products,
        })
      );
    } catch (error) {
      return res(
        ctx.delay(1_000),
        ctx.status(500),
        ctx.json({
          error: error?.toString(),
        })
      );
    }
  }),
  rest.delete("/api/products/:id", (req, res, ctx) => {
    try {
      const { id } = req.params;
      const index = products.findIndex((product) => product.id === Number(id));

      if (index === -1) {
        return res(
          ctx.delay(1_000),
          ctx.status(404),
          ctx.json({
            error: "Product not found",
          })
        );
      }

      products.splice(index, 1);

      return res(ctx.delay(1_000), ctx.status(204));
    } catch (error) {
      return res(
        ctx.delay(1_000),
        ctx.status(500),
        ctx.json({
          error: error?.toString(),
        })
      );
    }
  }),
  rest.post("/api/products", (req, res, ctx) => {
    try {
      const product = JSON.parse(req.body);

      if (
        !product ||
        !product?.name ||
        !product?.description ||
        !product?.price ||
        !product?.image_url
      ) {
        return res(
          ctx.delay(1_000),
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }
      const productWithId = { ...product, id: products.length + 1 };
      products.push(productWithId);

      return res(
        ctx.delay(1_000),
        ctx.status(200),
        ctx.json({
          product: productWithId,
        })
      );
    } catch (error) {
      return res(
        ctx.delay(1_000),
        ctx.status(500),
        ctx.json({
          error: error?.toString(),
        })
      );
    }
  }),
  rest.patch("/api/products/:id", (req, res, ctx) => {
    try {
      const { id } = req.params;
      const index = products.findIndex((product) => product.id === Number(id));
      if (index === -1) {
        return res(
          ctx.delay(1_000),
          ctx.status(400),
          ctx.json({
            error: "Product not found",
          })
        );
      }

      const product = JSON.parse(req.body);

      if (
        !product ||
        !product?.name ||
        !product?.description ||
        !product?.price ||
        !product?.image_url ||
        !products[index]
      ) {
        return res(
          ctx.delay(1_000),
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }

      const productWithId = { ...product, id: products[index].id };
      products[index] = productWithId;

      return res(
        ctx.delay(1_000),
        ctx.status(200),
        ctx.json({
          product: productWithId,
        })
      );
    } catch (error) {
      return res(
        ctx.delay(1_000),
        ctx.status(500),
        ctx.json({
          error: error?.toString(),
        })
      );
    }
  }),
];

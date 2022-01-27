## GET /products

REQUEST:

```
fetch('/api/products').then(data => data.json()).then(data => console.log(data))
```

RESPONSE:

```
{"products":[{"id":1,"name":"Example","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","price":1999,"image_url":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}]}
```

## GET /products/:id

REQUEST:

```
fetch('/api/products/1').then(data => data.json()).then(data => console.log(data))
```

RESPONSE:

```
{"product":{"id":1,"name":"Example","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","price":1999,"image_url":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}
```

## POST /products

REQUEST:

```
fetch('/api/products', { method: 'POST', body: JSON.stringify({
  name: "Example2",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  price: 1999,
  image_url:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}) }).then(data => data.json()).then(data => console.log(data))
```

RESPONSE:

```
{"product":{"name":"Example2","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","price":1999,"image_url":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","id":2}}
```

## PATCH /products/:id

REQUEST:

```
fetch('/api/products/1', { method: 'PATCH', body: JSON.stringify({
  name: "Example3",
  description:
    "New description",
  price: 2199,
  image_url:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}) }).then(data => data.json()).then(data => console.log(data))
```

RESPONSE:

```
{"product":{"name":"Example3","description":"New description","price":2199,"image_url":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","id":1}}
```

## DELETE /products/:id

REQUEST:

```
fetch('/api/products/1', {method: "DELETE"})
```

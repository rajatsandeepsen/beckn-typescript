# Beckn Protocol Client & Server Tools for Typescript
Wrapper around [OpenAPI Typescript Client](https://openapi-ts.dev/) to make it easier to work with Beckn Protocol APIs.

## Client Installation

```bash
npm install beckn-typescript openapi-fetch
```

### Client Example Usage

```typescript
import {
  // fetchMeta,
  // fetchRegistry,
  fetchTransaction
} from "beckn-typescript/client";

const {
  data, // only present if 2XX response
  error, // only present if 4XX or 5XX response
} = await fetchTransaction("/search", {
    baseUrl: "https://myapi.dev/v1/",
    body: {
        context: {
            // context fields
        },
        message: {
            // message fields
        },
    },
});
```

### Advanced Example Usage

```typescript
import {
  // createClientMeta,
  // createClientRegistry,
  createClientTransaction
} from "beckn-typescript/client";

// const clientMeta = createClientMeta({ baseUrl: "https://myapi.dev/v1/" });
// const clientRegistry = createClientRegistry({ baseUrl: "https://myapi.dev/v1/" });

const clientTransaction = createClientTransaction({ baseUrl: "https://myapi.dev/v1/" });

const {
  data, // only present if 2XX response
  error, // only present if 4XX or 5XX response
} = await clientTransaction.POST("/search", {
    body: {
        context: {
            // context fields
        },
        message: {
            // message fields
        },
    },
});
```

### React Query Example

```typescript
import createClient from "openapi-react-query";

const $api = createClient(clientTransaction);

const MyComponent = () => {
  const { data, error, isLoading } = $api.useQuery(
    "post",
    "/search",
    {
        body: {
            context: {
                // context fields
            },
            message: {
                // message fields
            },
        }
    }
  );

  if (isLoading || !data) return "Loading...";

  if (error) return `An error occured: ${error}`;

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
```

### SWR Example

```typescript
import { createQueryHook } from "swr-openapi";

const useQuery = createQueryHook(clientTransaction, "my-api");

function MyComponent() {
  const { data, error, isLoading, isValidating, mutate } = useQuery(
    "/search",
    {
        body: {
            context: {
            // context fields
            },
            message: {
            // message fields
            },
        },
    }
  );

  if (isLoading || !data) return "Loading...";

  if (error) return `An error occured: ${error}`;

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
```

## Server Installation

### Next.js API Example

```typescript
import { transactionServer } from "beckn-typescript/server/next";

// create API path `/api/[path]/route.ts`
export const { POST } = transactionServer({
    search: async (req, body) => {
        return {
            message: {
                ack: {
                    status: "ACK",
                },
            },
        };
    },
    // Add more tools as needed
});
```

### Express Middleware Example

```typescript
import express from "express";
import { transactionServer } from "beckn-typescript/server/express";

const app = express();
app.use(express.json()); // Ensure body-parser middleware is used

// Use the transactionServer middleware
app.use("/:path", transactionServer({
    search: async (req, body) => {
        return {
            message: {
                ack: {
                    status: "ACK",
                },
            },
        };
    },
    // Add more tools as needed
}));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

### Hono Middleware Example

```typescript
import { Hono } from "hono";
import { transactionServer } from "beckn-typescript/server/hono";

const app = new Hono();

// Use the transactionServer middleware
app.use("/:path", transactionServer({
    search: async (c, body) => {
        return {
            message: {
                ack: {
                    status: "ACK",
                },
            },
        };
    },
    // Add more tools as needed
}));

export default app;
```

# References
- [Beckn Protocol Specifications](https://github.com/beckn/protocol-specifications.git)
- [OpenAPI Typescript Client](https://openapi-ts.dev/)
- [Nextjs API Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Express Middleware Documentation](https://expressjs.com/en/guide/using-middleware.html)
- [Hono Middleware Documentation](https://hono.dev/docs/guides/middleware)
- [NPM Package](https://www.npmjs.com/package/beckn-typescript)

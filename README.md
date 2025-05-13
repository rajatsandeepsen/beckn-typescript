# Beckn Protocol Client for Typescript
Wrapper around [OpenAPI Typescript Client](https://openapi-ts.dev/) to make it easier to work with Beckn Protocol APIs.

### Installation

```bash
npm install beckn-typescript
```

### Simple Example Usage

```typescript
import {
  // fetchMeta,
  // fetchRegistry,
  fetchTransaction
} from "beckn-typescript";

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
} from "beckn-typescript";

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

# References
- [Beckn Protocol Specifications](https://github.com/beckn/protocol-specifications.git)
- [OpenAPI Typescript Client](https://openapi-ts.dev/)
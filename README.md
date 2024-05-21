# use-media-query-react

A simple and efficient React hook for matching media queries.

## Installation

To install the `use-media-query-react` package, you can use either npm/yarn/pnpm/bun:

```bash
pnpm install use-media-query-react
```

## Usage

Here's a basic example of how to use the `useMediaQuery` hook:

```jsx
import { useMediaQuery } from 'use-media-query-react'

const MyComponent = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <p>
      {isMobile ? 'Mobile view' : 'Desktop view'}
    </p>
  )
}
```

In this example, `useMediaQuery` will return `true` if the viewport is 768px or less, and `false` otherwise. This value will update dynamically as the window is resized.

## API

### `useMediaQuery(query: string)`

The `useMediaQuery` hook accepts a single argument, a string that represents the media query to match.

It returns a boolean value that indicates whether the media query matches the current viewport size.

## Server-side Support

This hook is safe to use with server-side rendering. If `window` is undefined (as it would be during server-side rendering), `useMediaQuery` will return `false`.

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contact

If you have any questions, feel free to [raise an issue](https://github.com/siddharthborderwala/use-media-query-react/issues/new).

---

That's it! You're ready to start using `use-media-query-react` in your React project. Enjoy!

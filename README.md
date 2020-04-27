# react-immutable-snake

`react-immutable-snake` is a Snake clone with a twist!

- The game logic is handled with immutable states (via [react-redux](https://github.com/reduxjs/react-redux)). This means it's easy to save a history of game frames, which allows us to rewind time and render snapshots for each game frame.
- The game is rendered with Canvas API (via [react-konva](https://github.com/konvajs/react-konva)), so we are getting a high-performant, hardware-accelerated rendering.

Live demo: https://react-immutable-snake.netlify.app

## Hooks

### [useKeyPress](src/hooks/useKeyPress.ts)

Responds to keyboard events with the given callback

```ts
(callback: (e: KeyboardEvent) => any) => void
```

```ts
useKeyPress((e) => console.log(`${e.keyCode} was pressed!`)
```

### [useInterval](src/hooks/useInterval.ts)

Sets an interval

```ts
(callback: () => any, delay: number) => void
```

```ts
useInterval(() => console.log(props.count), 1000)
```

### [useDirectionalInput](src/hooks/useDirectionalInput.ts)

Responds to directional input with the given control scheme (according to the rules of Snake)

```ts
(
  scheme: Record<
    'left' | 'up' | 'right' | 'down',
    {
      readonly keyCode: number
      readonly callback: () => any
    }
  >,
  active: boolean,
  delay: number,
) => void
```

```ts
useDirectionalInput(
  {
    left: {
      keyCode: 37,
      callback: handleMoveLeft,
    },
    up: {
      keyCode: 38,
      callback: handleMoveUp,
    },
    right: {
      keyCode: 39,
      callback: handleMoveRight,
    },
    down: {
      keyCode: 40,
      callback: handleMoveDown,
    },
  },
  shouldRespondToDirectionalInput,
  50,
)
```

## Local development

Clone this repository, and install the dependencies:

```
$ git clone https://github.com/TomerRon/react-immutable-snake
$ cd react-immutable-snake
$ yarn
```

Start the development server:

```
$ yarn start
```

## Deployment

Deploy the app to Netlify by initializing a new Netlify site:

```
$ yarn netlify init --manual
```

Then deploy to a staging enviornment:

```
$ yarn deploy
```

Or deploy to production:

```
$ yarn deploy:prod
```

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

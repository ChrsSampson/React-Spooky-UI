# React Spooky UI

Halloween themed UI component library for react, just for fun.

## Installation

```bash
npm i react-spooky-ui
```

## Components

-   Button
-   Typography
-   Input
-   Divider
-   Select
-   Carousel
-   Modal
-   Card
-   Container
-   Grid

## Theming

Theme is handled by the new light-dark css function. Just toggle the class on document.body to change the theme. Setting the class to "light dark" uses system preferences and is also the default

[MDN light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark#example)

```javascript
// switch from light to dark
document.body.classList.toggle("light");
document.body.classList.toggle("dark");

// system preferences
document.body.classList = "light dark";
```

## Example Usage

```javascript
// Button
import { Button } from "react-spooky-ui";

// use the button
<Button onClick={doTheThing} variant="skeleton">
    Click Me!
</Button>;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

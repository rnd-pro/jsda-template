export default /*css*/ `
@view-transition {
  navigation: auto;
}

:root {
  --clr-1: #eee;
  --clr-2: #212121;

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --ui-size: 40px;
  --col-w: 960px;

  --calc-gap-aside: calc((100vw - var(--col-w)) / 2);
  --calc-top-pan-height: calc(var(--ui-size) + var(--gap-mid) * 2);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: var(--clr-1);
  color: var(--clr-2);
}

article {
  display: block;
  margin: auto;
  max-width: var(--col-w);
  min-height: calc(100vh - var(--ui-size) * 2);
  padding: var(--gap-max);

  blockquote {
    display: block;
    margin: 0;
    padding: var(--gap-max);
    border: var(--gap-min) solid currentColor;

    p {
      margin: 0;
    }
  }

  a {
    color: currentColor;
    font-weight: bold;
  }

  img[src^="https://rnd-pro.com/idn/"] {
    width: 100%;
  }

  svg {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center center;

    path {
      vector-effect: non-scaling-stroke;
    }
  }

  ul {
  position: relative;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;

    li {
      position: relative;
      display: block;
      padding: 10px;
      padding-left: 30px;
      border-left: var(--gap-min)solid currentColor;
      margin-bottom: 0;

      &::before {
        position: absolute;
        left: 0;
        top: 50%;
        width: 10px;
        height: var(--gap-min);
        border-bottom: var(--gap-min) solid currentColor;
        content: "";
        color: currentColor;
        margin-right: var(--gap-mid);
      }
    }
  }
}
`;
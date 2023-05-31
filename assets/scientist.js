import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

const Scientist = props => (
  <Svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
     <Path fill="url(#a)" d="M0 0h48v48H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.02)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEvUlEQVR4nO1aa2hcRRQen22lPn6oFUWtNlisiuLuOTftnwXFxw8RVKJikfr4URT1n1LrI4gPTPacTYKFUuofQXz0l1IVlUJbiy1WUdQKJaIx8c65uyZWUAtWo1fO3bkmxDS792bXWUs/GFjuvXPmfDNzHnNmjTmKo/j/IO41x0ZcQEv4iDAMCsGrwvCK/g45uH28b9XJppMxPNS1IGJ82BJUhTGeo40rIdOJsIOF84Rw/5SyMCwEL1iGh1TpqAK3JiQZd+p7y/inELwRMfbEsTnGdAJq/XCWJfzGKfilpeCaub4XgidmrNC2kYHLTzO+YRm3JCQI9hx4vnBqM32iMl4gBPel29AybjU+EQ4Ul1vCvyzjryEVz83aPxoIlgrhREKmgtcaX7CE65PtQfDivGUwvtxa7bIowbi1rkRwS14ZUbl4aX17wbfGF9S4VYmoApfklTExhKc4G5vUGGR8wDJ8lRAZCJbmlaHKq50JYzzG3YuMzxWRMq7IKyPuLR2fxBXGQ95iijB+mhCpQDG3jPLK810Q/d74giV8PdlajD15ZQgXS85rfdha7TIpgU869/tcXhmWYJ3zWpXWapdFCYab3Gy+m1sGwdsqI/SZSEoF1tRXBCfyGKr2EYYDzmHcaXzBEn5UX5Hi/bllMD7gJmO38QUhHHX+vyuvjJDgIhcQR4wvCMF7zv2uySsj5OBulwG/Y3xBt5TzON+p98na3zI+mq6qMK41vjDSW1r4j50Q7s/aPzlJOvsYHupaYHxCkz5L+LsmfbUNpcXN9tNTYZqadExBQhh2OYNd3WyfiOAuty23m06BMK6tE8GPm4knSfwg/MwZ+b2mUzDG3YuEIHRkqNH3mo44Ax/zbhszEVJwoyMipgEsY5QkmwQ3mE7DaN+qs106bpsloqUkc6QREecwDt9glzkiiBB80HYSTpHr3YA/zlU51HdC+NNstSxxSjd61jZYguu0OJ0Oqgav6UeVuy+zmwonaUt+E65PV8PFkNp0MuKLiNZ59VCVVkEsw1u6BRpU4zV27ExrYtrXC5GR3tLCkPAeYfh8agXgF70Pibf0HKfBTmfZErwkBF8L4cGkMQzrMyWv39TLQLDOMvz8nxKJyivP1LP5zC0kBI9ZKpyeV64MXXHGXErbej4W1/oLy+ZFQGdZZ1tnbsqD4G7LcMe+3hUnzkv4bCdFxvHpz4XxNTdp+3Inl/UMFbZP8+XvCwUF02JEZbzKMvyh9hJS8bbp71R5JeHGfzNzWVVTcmH4xLnUUFMQ0wZUK8UL06sFYXh2Vl36C8vUrTtH8UymASzhxvQabYy7zzFtQDLbadmVm2uzrVrDCxw99MhAcHE7SOgW0XvELCRkykYP2kr3lQ0HEYY+x36jaRMs4dNpJpDFIwnjZkdmtDoYLGkwCOxJqn8EV7dC6X8pUy7enFzZEUxqapOlb7ypcIIl3JHWi+c8z6SG1eK2LU0uU1eu19d5JqI6GCxJqy+W4KnDRu42kFCn8bjK1/v2Vtzkiqvia+5mfMAylN1MPjgfOXH93P+bbk/jA1p1d0S+UO+YR0ZtQ2lxehtsGfcaH3BXbXtbsV0twWSjf1q0FcnhinGzJfwhJ4lDWuHUc5AK/BujTBdOHK6DdgAAAABJRU5ErkJggg=="
        id="b"
        width={50}
        height={50}
      />
    </Defs>
  </Svg>
);

export default Scientist;

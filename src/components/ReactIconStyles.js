import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Svg = styled(motion.svg)`

  /* position: relative;
  display: block;
  margin: auto;

  padding-top: 1%; */

  /* Se accede a una etiqueta hijo */
  & path {
    /* stroke: #ffffff;
    fill: #000000; */
    /* stroke-width: 8px; */
  }

  &:hover circle {
    stroke: red;
    fill: none;
  }

  &:hover g {
    stroke: red;
    /* fill: red; */
  }
`

export const Path = styled(motion.path)`

`

export default styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
})``
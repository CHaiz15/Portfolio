import { keyframes } from 'styled-components';

export const enlarge = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`

export const shrink = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const fadeIn = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const animatedText = (width) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width};
  }
`
export const arrowMove = keyframes `{
  0% { 
    opacity: 0;
    top: 45%;
  }
  70% {
      opacity: 1;
  }
  100% { 
      opacity: 0;
  }
}`
export const animatedCursor = keyframes`
  0% {border-right-color: rgb(50, 50, 49);}
  100% {border-right-color: transparent;}
` 

export const periodExit = keyframes`
  0% {
    transform: translateY(0) rotateX(0) scale(1);
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    transform: translateY(-600px) rotateX(-30deg) scale(3);
    transform-origin: 50% 100%;
    opacity: 0;
  }
`

export const periodIn = keyframes`
  0% {
    transform: translateY(-600px) rotateX(-30deg) scale(3);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateX(0) scale(1);
    transform-origin: 50% 100%;
    opacity: 1;
  }
`

export const sonarEffect = keyframes`
	0% {
		opacity: 0.5;
	}
	40% {
		opacity: 0.7;
		box-shadow: 0 0 0 2px rgb(50, 50, 49), 0 0 10px 10px rgb(50, 50, 49), 0 0 0 10px rgb(50, 50, 49);
	}
	100% {
		box-shadow: 0 0 0 2px rgb(50, 50, 49), 0 0 10px 10px rgb(50, 50, 49), 0 0 0 10px rgb(50, 50, 49);
		transform: scale(1.5);
		opacity: 0;
	}
`

export const slideIn = keyframes`
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`

export const slideUp = keyframes`
  100% {
    height: 10vh;
    align-items: null;
  }
`

export const slideUp2 = keyframes`
  100% {
    opacity: 0.50;
    visibility: hidden;
  }
`

export const shadowIn = keyframes`
  0% {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
  }
`

export const backgroundPan = keyframes`
  0% {
    background: rgb(70, 170, 239);
  }
  33.3333% {
    background: rgb(92,213,4);
  }
  66.666% {
    background: rgb(252, 231, 0);
  }
  100% {
    background: rgb(238, 54, 52);
  }
`

export const fadeOut = keyframes`
0% {
  transform: translateZ(0) translateY(0);
  opacity: 1;
}
60% {
  opacity: 1;
}
100% {
  filter: blur(40px);
  letter-spacing: -1.2em;
  transform: translateZ(-600px) translateY(-400px);
  opacity: 0;
}
`
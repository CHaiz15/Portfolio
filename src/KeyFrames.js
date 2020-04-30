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

export const animatedText = keyframes`
  from{width: 0;}
  to{width: 100%;}
`

export const animatedCursor = keyframes`
  from{border-right-color: rgb(50, 50, 49);}
  to{border-right-color: transparent;}
` 

export const animatedText2 = keyframes`
  from{width: 0;}
  to{width: 72%;}
`

export const animatedCursor2 = keyframes`
  from{border-right-color: rgb(50, 50, 49);}
  to{border-right-color: transparent;}
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
`

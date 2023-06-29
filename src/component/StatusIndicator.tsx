import {
  Box, BoxProps, keyframes,
  Tooltip
} from '@chakra-ui/react';
export interface StatusIndicatorProps extends BoxProps {
  isActive?:boolean;
  pulseInterval?:number;
}
export const StatusIndicator = ({...props}:StatusIndicatorProps) => {
  const ringScaleMin = 0.33;
  const ringScaleMax = 0.66;

  const pulseRing = keyframes`
	0% {
    transform: scale(${ringScaleMin});
  }
	30% {
		transform: scale(${ringScaleMax});
	},
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;
  const pulseInterval = props.pulseInterval??2.25;
  return (
    <Box
      position="relative"
      borderRadius="30%"
      _before={props.isActive?{
        content: "''",
        position: 'relative',
        display: 'block',
        width: '300%',
        height: '300%',
        boxSizing: 'border-box',
        marginLeft: '-100%',
        marginTop: '-100%',
        borderRadius: '30%',
        bgColor: props.bgColor,
        animation: `${pulseInterval}s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
      }:{}}
      {...props} 
      />
  );
};

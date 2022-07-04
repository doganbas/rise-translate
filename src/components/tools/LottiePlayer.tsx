import React, {FunctionComponent, useEffect, useRef} from 'react';
import LottieView, {AnimatedLottieViewProps} from 'lottie-react-native';

const LottiePlayer: FunctionComponent<AnimatedLottieViewProps> = (props) => {
    const animationRef = useRef<LottieView>(null);

    useEffect(() => {
        if (props.autoPlay)
            animationRef.current?.play();
    }, []);

    return (
        <LottieView {...props} ref={animationRef}/>
    )
}

export default LottiePlayer;

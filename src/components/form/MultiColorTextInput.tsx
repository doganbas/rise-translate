import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {StyleProp, TextInput, TextInputProps, TextStyle, TouchableWithoutFeedback, View, ViewStyle} from 'react-native';
import StylesHelper from '../../helpers/stylesHelper';

const MultiColorTextInput: FunctionComponent<{
    containerStyle: (isFocused: boolean) => StyleProp<ViewStyle> | StyleProp<ViewStyle>[],
    inputStyle: (value: string | undefined) => StyleProp<TextStyle>[],
    onChangeText: (value: string | undefined) => void,
    value: string | undefined,
    placeholder?: string | undefined,
    autoFocus?: boolean | undefined,
    inputProps?: TextInputProps | undefined,
    renderIcon: (isFocused: boolean, value: string | undefined) => JSX.Element
}> = (props) => {
    const selectColors = [StylesHelper.project1, StylesHelper.project2, StylesHelper.project3, StylesHelper.project4, StylesHelper.project5, StylesHelper.project6, StylesHelper.project7, StylesHelper.gray600, StylesHelper.gray800];
    const searchInputRef = useRef<TextInput>(null);
    const [inputColor, setInputColor] = useState<string>(StylesHelper.project3);
    const [inputFocused, setInputFocused] = useState<boolean>(false);

    useEffect(() => {
        const randomColor = Math.round(Math.random() * selectColors.length);
        setInputColor(selectColors[randomColor]);
    }, [props.value]);

    return (
        <TouchableWithoutFeedback onPress={() => searchInputRef.current?.focus()}>
            <View style={props.containerStyle(inputFocused)}>
                <TextInput
                    {...props.inputProps}
                    autoFocus={props.autoFocus}
                    ref={searchInputRef}
                    placeholder={props.placeholder}
                    placeholderTextColor={StylesHelper.gray800}
                    style={[...props.inputStyle(props.value), props.value ? {color: inputColor} : null]}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    onChangeText={value => props.onChangeText(value)}
                    value={props.value}
                />
                {props.renderIcon(inputFocused, props.value)}
            </View>
        </TouchableWithoutFeedback>
    )

}

export default MultiColorTextInput;

import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

const ImageComponent = (props) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [image, setImage] = useState(props.source.uri ? props.source : require('./../../../assets/images/imageError.png'));
    return (
        <>
            <Image
                onLoadStart={() => setIsImageLoading(true)}
                onError={() => setImage(require('./../../../assets/images/imageError.png'))}
                onLoadEnd={() => setIsImageLoading(false)}
                style={props.style}
                resizeMode={props.resizeMode}
                source={image}
            />
            {isImageLoading && <View style={{ position: 'absolute' }}>
                <ActivityIndicator color={props.fontColor} size="large" />
            </View>}
        </>
    )
}

export default ImageComponent

const styles = StyleSheet.create({})
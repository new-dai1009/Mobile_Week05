import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const VsSanPham = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../img/vs_blue.png')} style={styles.image} />

            <Text style={styles.title}>
                Điện Thoại Vsmart Joy 3 - Hàng chính hãng
            </Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingStar}>⭐⭐⭐⭐⭐</Text>
                <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.originalPriceContainer}>
                <Text style={styles.price}>1.790.000 đ</Text>
                <Text style={styles.originalPrice}>1.790.000 đ</Text>
            </View>
            <View style={styles.originalPriceContainer}>
                <Text style={styles.discount}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <TouchableOpacity>
                <View style={styles.questionIconContainer}>
                    <Icon name="question-circle" style={styles.questionIcon} />
                </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.colorButtonContainer}>
                <Text style={styles.colorButtonText} onPress={() => navigation.navigate('VsColor')}>4 MÀU-CHỌN MÀU</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonContainer, styles.button]}>
                <Text style={styles.buttonText} >CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginLeft: 30,
        position: 'relative',
        flex: 1,
    },
    questionIconContainer: {
        width: 20, 
        height: 20, 
        backgroundColor: 'gray', 
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionIcon: {
        color: 'white', 
        fontSize: 20, 
    },
    image: {
        width: 301,
        height: 361,
    },
    title: {
        width: 288,
        height: 18,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 17,
        marginVertical: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingStar: {
        height: 25,
        color: '#E0E41A',
        marginRight: 5,
    },
    ratingText: {
        width: 135,
        height: 18,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 17,
        marginRight: 5,
    },
    price: {
        width: 110,
        height: 21,
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 21,
        marginVertical: 10,
    },
    originalPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    originalPrice: {
        width: 100,
        height: 18,
        fontSize: 15,
        fontWeight: 700,
        lineHeight: 18,
        textDecorationLine: 'line-through',
        color: 'gray',
        marginRight: 5,
    },
    discount: {
        width: 165,
        height: 14,
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 14,
        color: 'red',
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        width:326,
        height:44,
        borderRadius:10,
        padding: 5,
        backgroundColor: 'red',
        padding: 10,
        marginTop: 50,

    },
    buttonText: {
        height:23,
        fontWeight:700,
        fontSize:20,
        lineHeight:23,
        textAlign:'center',
        color: 'white',
    },
    colorButtonContainer: {
        width:332,
        height:34,
        borderWidth:1,
        borderRadius:10,
        padding: 6,
        marginTop: 20,
    },
    colorButtonText: {
        height:18,
        fontWeight:400,
        fontSize:15,
        lineHeight:17,
        textAlign:'center',
        color: 'black',
    },
});

export default VsSanPham;
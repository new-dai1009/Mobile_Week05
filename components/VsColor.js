import React, { useState } from 'react';
import { View,Text,Image,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';

const VsColor = ({ navigation }) => {

  const [selectedColor, setSelectedColor] = useState(''); 
  const [productImage, setProductImage] = useState(require('../img/vs_blue.png')); 
  const [text1, setText1] = useState(''); 
  const [text2, setText2] = useState(''); 

  const changeProductColor = (color, image) => {
    setSelectedColor(color);
    setProductImage(image);
    setText1("Tiki Tradding");
    setText2("1.790.000 đ");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.part1}>
        <Image source={productImage} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          {selectedColor ? (
            <Text>
              <Text style={styles.boldText}>Màu:</Text> {selectedColor}
            </Text>
          ) : null}
          {selectedColor ? (
            <Text>
              <Text style={styles.boldText}>Cung cấp bởi:</Text> {text1}
            </Text>
          ) : null}
          {selectedColor ? (
            <Text>
              <Text style={styles.boldText}>Giá:</Text> {text2}
            </Text>
          ) : null}
        </View>
      </View>
      <View style={styles.part2}>
        <Text style={styles.selectColorText}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorButtons}>
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#DDDDDD' }]}
            onPress={() =>
              changeProductColor(
                'Bạc',
                require('../img/vs_silver.png')
              )
            }
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: 'red' }]}
            onPress={() =>
              changeProductColor('Đỏ', require('../img/vs_red.png'))
            }
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: 'black' }]}
            onPress={() =>
              changeProductColor('Đen', require('../img/vs_black.png'))
            }
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#234896' }]}
            onPress={() =>
              changeProductColor('Xanh', require('../img/vs_blue.png'))
            }
          />
        </View>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  part1: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  productImage: {
    width: 140,
    height: 160,
  },
  productInfo: {
    marginTop: 20,
    marginLeft: 20,
  },
  productName: {
    width: 164,
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 17,
  },
  boldText: {
    fontWeight: 'bold',
  },
  part2: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    padding: 20,
    height: 400,
  },
  selectColorText: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorButtons: {
    alignItems:'center',
    flexDirection: 'column', 
    marginBottom: 20,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderColor:'white',
    marginBottom: 10, 
  },
  doneButton: {
    width: 350,
    height: 44,
    backgroundColor: '#1952E294',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButtonText: {
    height: 23,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23,
  },
});

export default VsColor;
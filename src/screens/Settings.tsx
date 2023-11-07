import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Modal, Button, Share,StyleSheet } from 'react-native';

const AppInfo = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openShareModal = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this link: https://google.com',
      });
      console.log(result);
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  const sendEmail = () => {
    Linking.openURL('mailto:abc@gmail.com');
  };

  return (
    <View>
      <TouchableOpacity onPress={openShareModal}>
        <Text style={styles.text}>Share App</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendEmail}>
        <Text style={styles.text}>Contact Us: abc@gmail.com</Text>
      </TouchableOpacity>
      <Text style={styles.text}>App Version: 1.0.0</Text>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is the Share Modal</Text>
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    padding: 10,
    color:'black'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
  },
});

export default AppInfo;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    console.log('Card Holder Name:', cardHolderName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="1234 5678 9012 3456"
      />
      <Text style={styles.label}>Expiry Date</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="MM/YY"
      />
      <Text style={styles.label}>CVV</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cvv}
        onChangeText={setCvv}
        placeholder="123"
        secureTextEntry
      />
      <Text style={styles.label}>Card Holder Name</Text>
      <TextInput
        style={styles.input}
        value={cardHolderName}
        onChangeText={setCardHolderName}
        placeholder="John Doe"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default CreditCardForm;